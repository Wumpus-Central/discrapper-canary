n.d(t, {
    YX: () => J,
    Mr: () => ee,
    Ns: () => $,
    mn: () => X,
    HW: () => K,
    K8: () => Z,
    jz: () => q,
    bo: () => Y,
    Gw: () => Q,
    UB: () => z,
    lw: () => W,
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
    N = n(297930),
    S = n(645619),
    _ = n(379229),
    I = n(990208),
    b = n(864310),
    G = n(363487),
    v = n(828162),
    R = n(490557),
    j = n(565553),
    M = n(168900),
    y = n(285828);
function T(e) {
    let { powerup: t, eventTargetRef: n, className: i } = e,
        s = { eventTargetRef: n, fit: "contain", className: i };
    switch (t.skuId) {
        case a.ec:
            return (0, l.jsx)(j.t, { ...s });
        case a.RV:
            return (0, l.jsx)(M.J, { ...s });
        case a.YG:
            return (0, l.jsx)(y.z, { ...s });
        default:
            return null;
    }
}
var L = n(249286),
    U = n(867060),
    D = n(800007),
    P = n(568065),
    O = n(652215),
    V = n(746080),
    w = n(49999),
    H = n(576709),
    B = n(853513),
    k = n(985018),
    F = n(945915);
function K(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: s } = e;
    return (0, l.jsx)(et, {
        asset: (0, l.jsx)(R.b, { className: r()(F.Sl, F.SV) }),
        title: k.intl.formatToPlainString(B.default["Zg/m9K"], { perkName: n.title }),
        body: k.intl.formatToPlainString(B.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function z(e) {
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
        title: k.intl.string(B.default.QpQBPQ),
        body: k.intl.string(B.default["6hn0xF"]),
        action: {
            text: k.intl.string(k.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(w.i.USER_DISMISS),
    });
}
function W(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        a = (0, d.bG)([E.A], () => E.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, L.A)(t, n[0]),
        h = (0, I.A)(n[0], !0);
    if (((0, U.A)(u), 0 === n.length)) return;
    let A =
            n.length >= 3
                ? k.intl.formatToPlainString(B.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? k.intl.formatToPlainString(B.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : k.intl.formatToPlainString(B.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, l.jsx)(et, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, l.jsx)(R.b, { className: r()(F.Sl, F.SV) })
                : (0, l.jsx)("img", { alt: "", src: h, className: F.Sl }),
        title: k.intl.formatToPlainString(B.default.LmpChE, { guildName: a }),
        body: A,
        actions: [
            {
                text: m ? k.intl.string(B.default.gSxlHf) : k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function Y(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, l.jsx)(et, {
            targetElementRef: i,
            title: k.intl.string(B.default.Ygpx4Q),
            body: k.intl.string(B.default.mmNkUA),
            size: "video",
            asset: "https://cdn.discordapp.com/assets/content/6ffaa21345f63322cf7ff8725e4e087b8c32968b8b7ba55822f0c369d7f0c03b.gif",
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => P.m_.has(e.skuId));
    if (null != o)
        return (0, l.jsx)(et, {
            targetElementRef: i,
            title: k.intl.string(B.default["kA2c+n"]),
            body: k.intl.string(B.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: F.Sl,
            }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => P.aH.has(e.skuId));
    if (null != d)
        return (0, l.jsx)(et, {
            targetElementRef: i,
            title: k.intl.string(B.default["kA2c+n"]),
            body: k.intl.string(B.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: F.Sl,
            }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => e.skuId === a.zY);
    return null != c
        ? (0, l.jsx)(et, {
              targetElementRef: i,
              title: k.intl.string(B.default.rp0Ff1),
              body: k.intl.string(B.default["3L/DZq"]),
              size: "video",
              asset: (0, l.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: F.Sl,
              }),
              actions: [
                  {
                      text: k.intl.string(k.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function q(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: s } = e,
        { available: r } = (0, b.A)(t),
        { gameName: a, gameName2: c } = (0, x.A)(),
        u = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(et, {
        size: "video",
        targetElementRef: s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(n === _.o.GAME_SERVER_HOSTING_AVAILABLE ? H.default.wXLChx : H.default["8z8RpY"]),
        body:
            n === _.o.GAME_SERVER_HOSTING_AVAILABLE
                ? k.intl.formatToPlainString(H.default["7KXp9J"], { gameName: a, gameName2: c })
                : k.intl.format(H.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        s = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(et, {
        size: "video",
        targetElementRef: i,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(H.default["eX64+z"]),
        body: k.intl.string(H.default.NpgfEB),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(w.i.TAKE_ACTION), (0, C.pX)(O.BVt.CHANNEL(t, V.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        { gameName: s, gameName2: r } = (0, x.A)(),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(et, {
        size: "video",
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(H.default.t3LNW1),
        body: k.intl.formatToPlainString(H.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: k.intl.string(H.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(w.i.TAKE_ACTION),
                        (0, p.K4)({
                            guildId: t,
                            location: { section: O.JJy.GUILD_HEADER, object: O.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = (0, G.A)(t);
    return (0, l.jsx)(et, {
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(N.default, { gameId: D.Yh.FEATURED_GAME_ID }),
        aspectRatio: "6/4",
        title: k.intl.string(H.default["wy+j5s"]),
        body: k.intl.formatToPlainString(H.default["7OETrT"], {
            gameName: D.Yh.FEATURED_GAME_NAME,
            gameName2: D.Yh.SECOND_GAME_NAME,
            gameName3: D.Yh.THIRD_GAME_NAME,
        }),
        actions: [
            {
                text: k.intl.string(H.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(w.i.TAKE_ACTION),
                        r
                            ? (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, D.W5)
                            : (0, p.K4)({
                                  guildId: t,
                                  location: { section: O.JJy.GUILD_HEADER, object: O.ZSU.BUTTON_CTA },
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
        r = (0, G.A)(t),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, l.jsx)(et, {
        size: "video",
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(H.default.Jkx0sf),
        body: k.intl.string(H.default.WhPKFP),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    r
                        ? (0, v.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, D.W5)
                        : (n(w.i.TAKE_ACTION),
                          (0, p.K4)({
                              guildId: t,
                              location: { section: O.JJy.GUILD_HEADER, object: O.ZSU.BUTTON_CTA },
                              scrollToPowerupCards: !0,
                          }));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, b.A)(t),
        d = n.cost - o,
        c = (0, I.A)(n, !0),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, G.A)(t),
        A = i.useRef(null);
    return (0, l.jsx)(et, {
        asset:
            n.type === P.o9.LEVEL
                ? (0, l.jsx)(T, { powerup: n, eventTargetRef: A, className: F.Lj })
                : (0, l.jsx)("img", { alt: "", src: c, className: F.Sl }),
        title: k.intl.string(B.default.n37JhA),
        body: k.intl.formatToPlainString(h || n.type === P.o9.LEVEL ? B.default.Yr1ogl : B.default["7MZ2tu"], {
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
                    let l = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    await (0, f.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: n.type === P.o9.PERK ? P.Pn.PERK : void 0,
                    }),
                        r(w.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: r,
        ...a,
    });
}
function ee(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        c = (0, d.bG)([S.A], () => S.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        h = c?.allPowerups[n.skuId],
        p = (0, I.A)(h, !0),
        C = i.useRef(null),
        x = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    if (null == h && !n.isGameServer) return null;
    let N = n.isGameServer
            ? k.intl.string(B.default["9L0pAN"])
            : k.intl.formatToPlainString(B.default.gG8bI8, { perkName: n.name }),
        _ = 0 === n.daysUntilExpiry ? B.default.BNS5zl : B.default["Xla/TL"],
        b = k.intl.formatToPlainString(_, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, l.jsx)(et, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, l.jsx)(o.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: F.Sl,
                  stateMachine: x ? "SM_Main_Int" : "SM_Auto",
              })
            : h?.type === P.o9.LEVEL
              ? (0, l.jsx)(T, { powerup: h, eventTargetRef: C, className: F.Lj })
              : (0, l.jsx)("img", { alt: "", src: p, className: F.Sl }),
        title: N,
        body: b,
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    await (0, f.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: h?.type === P.o9.PERK || n.isGameServer ? P.Pn.PERK : void 0,
                    }),
                        r(w.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: r,
        ...a,
    });
}
function et(e) {
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
        onRequestClose: () => r?.(w.i.USER_DISMISS),
    });
}
