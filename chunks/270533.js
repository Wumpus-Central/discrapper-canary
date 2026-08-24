n.d(t, {
    YX: () => et,
    Mr: () => ei,
    Ns: () => en,
    mn: () => $,
    HW: () => Y,
    K8: () => Q,
    Gz: () => ee,
    jz: () => Z,
    bo: () => J,
    Gw: () => el,
    UB: () => X,
    lw: () => q,
});
var l = n(477900),
    i = n(582128),
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
    f = n(948134),
    p = n(892740),
    C = n(906199),
    E = n(987144),
    x = n(976860),
    N = n(71393),
    _ = n(645619),
    I = n(379229);
let S = (0, n(240921).Ay)({
    name: "2026-07-powerups-coachmark-scroll-close",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function b(e) {
    return S.useConfig({ location: e }).enabled;
}
var G = n(990208),
    j = n(864310),
    v = n(363487),
    R = n(828162),
    y = n(490557),
    M = n(565553),
    L = n(168900),
    T = n(285828);
function U(e) {
    let { powerup: t, eventTargetRef: n, className: i } = e,
        s = { eventTargetRef: n, fit: "contain", className: i };
    switch (t.skuId) {
        case a.ec:
            return (0, l.jsx)(M.t, { ...s });
        case a.RV:
            return (0, l.jsx)(L.J, { ...s });
        case a.YG:
            return (0, l.jsx)(T.z, { ...s });
        default:
            return null;
    }
}
var D = n(249286),
    O = n(867060),
    P = n(568065),
    V = n(652215),
    w = n(746080),
    H = n(49999),
    B = n(628049),
    k = n(641641),
    F = n(375708),
    K = n(632847),
    z = n(120336);
let W =
    "https://cdn.discordapp.com/assets/content/a43712d53d007cf7433bb7934419b46aa86e2edaa3fabe5486e92f1d8cf23a83.png";
function Y(e) {
    let { guildId: t, powerup: n, channelRowRef: i, markAsDismissed: s } = e;
    return (0, l.jsx)(es, {
        asset: (0, l.jsx)(y.b, { className: r()(z.Sl, z.SV) }),
        title: F.intl.formatToPlainString(k.default["Zg/m9K"], { perkName: n.title }),
        body: F.intl.formatToPlainString(k.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = b(g.A.GUILD_POWERUPS_COACHMARK);
    return (0, l.jsx)(u.H, {
        targetElementRef: i,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        scrollBehavior: r ? "close" : void 0,
        assetUrl:
            "https://cdn.discordapp.com/assets/content/ec10ea6e7609350fe848bf7497aba0ab1748521370f7e1f5fd257df714ff9c4c.gif",
        title: F.intl.string(k.default.QpQBPQ),
        body: F.intl.string(k.default["6hn0xF"]),
        action: {
            text: F.intl.string(F.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(H.i.USER_DISMISS),
    });
}
function q(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        a = (0, d.bG)([N.A], () => N.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, D.A)(t, n[0]),
        h = (0, G.A)(n[0], !0);
    if (((0, O.A)(u), 0 === n.length)) return;
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
    return (0, l.jsx)(es, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, l.jsx)(y.b, { className: r()(z.Sl, z.SV) })
                : (0, l.jsx)("img", { alt: "", src: h, className: z.Sl }),
        title: F.intl.formatToPlainString(k.default.LmpChE, { guildName: a }),
        body: A,
        actions: [
            {
                text: m ? F.intl.string(k.default.gSxlHf) : F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: i,
        markAsDismissed: s,
    });
}
function J(e) {
    let { guildId: t, powerups: n, channelRowRef: i, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.d0),
        o = (0, G.A)(r, !0) ?? W,
        d = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, l.jsx)(es, {
            targetElementRef: i,
            title: r.title,
            body: "string" == typeof r.description ? r.description : "",
            size: "video",
            asset: (0, l.jsx)("img", { alt: "", src: o, className: z.Sl }),
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    if (null != d)
        return (0, l.jsx)(es, {
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
                        (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => P.m_.has(e.skuId));
    if (null != c)
        return (0, l.jsx)(es, {
            targetElementRef: i,
            title: F.intl.string(k.default["kA2c+n"]),
            body: F.intl.string(k.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: z.Sl,
            }),
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let u = n.find((e) => P.aH.has(e.skuId));
    if (null != u)
        return (0, l.jsx)(es, {
            targetElementRef: i,
            title: F.intl.string(k.default["kA2c+n"]),
            body: F.intl.string(k.default.TUilLj),
            asset: (0, l.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: z.Sl,
            }),
            actions: [
                {
                    text: F.intl.string(F.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, u.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let h = n.find((e) => e.skuId === a.zY);
    return null != h
        ? (0, l.jsx)(es, {
              targetElementRef: i,
              title: F.intl.string(k.default.rp0Ff1),
              body: F.intl.string(k.default["3L/DZq"]),
              size: "video",
              asset: (0, l.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: z.Sl,
              }),
              actions: [
                  {
                      text: F.intl.string(F.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, h.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function Z(e) {
    let { guildId: t, type: n, markAsDismissed: i, channelRowRef: s } = e,
        { available: r } = (0, j.A)(t),
        { gameName: a, gameName2: c } = (0, f.A)(),
        u = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return (0, l.jsx)(es, {
        size: "video",
        targetElementRef: s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: z.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(n === I.o.GAME_SERVER_HOSTING_AVAILABLE ? K.default.wXLChx : K.default["8z8RpY"]),
        body:
            n === I.o.GAME_SERVER_HOSTING_AVAILABLE
                ? F.intl.formatToPlainString(K.default["7KXp9J"], { gameName: a, gameName2: c })
                : F.intl.format(K.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: i,
    });
}
function $(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        s = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return (0, l.jsx)(es, {
        size: "video",
        targetElementRef: i,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: z.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(K.default["eX64+z"]),
        body: F.intl.string(K.default.NpgfEB),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION), (0, x.pX)(V.BVt.CHANNEL(t, w.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        { gameName: s, gameName2: r } = (0, f.A)(),
        a = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return (0, l.jsx)(es, {
        size: "video",
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: z.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(K.default.t3LNW1),
        body: F.intl.formatToPlainString(K.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: F.intl.string(K.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION),
                        (0, C.K4)({
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
function ee(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i } = e,
        s = (0, d.bG)([_.A], () => _.A.getStateForGuild(t)?.allPowerups[a.d0]),
        r = (0, G.A)(s, !0) ?? W,
        { available: o } = (0, j.A)(t),
        c = P.fe - o,
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_GUILD_THEME_MEMBER);
    return (0, l.jsx)(es, {
        size: "video",
        targetElementRef: i,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, l.jsx)("img", { alt: "", src: r, className: z.Sl }),
        title: F.intl.string(k.default.RK6NbY),
        body: F.intl.string(k.default.xlAqGk),
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: c,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: P.Pn.PERK,
                    }),
                        n(H.i.TAKE_ACTION);
                },
            },
        ],
        markAsDismissed: n,
    });
}
function et(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = (0, v.A)(t);
    return (0, l.jsx)(es, {
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(p.default, { gameId: B.Yh.FEATURED_GAME_ID }),
        aspectRatio: "6/4",
        title: F.intl.string(K.default["wy+j5s"]),
        body: F.intl.formatToPlainString(K.default["7OETrT"], {
            gameName: B.Yh.FEATURED_GAME_NAME,
            gameName2: B.Yh.SECOND_GAME_NAME,
            gameName3: B.Yh.THIRD_GAME_NAME,
        }),
        actions: [
            {
                text: F.intl.string(K.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(H.i.TAKE_ACTION),
                        r
                            ? (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, B.W5)
                            : (0, C.K4)({
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
function en(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: i, ...s } = e,
        r = (0, v.A)(t),
        a = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return (0, l.jsx)(es, {
        size: "video",
        targetElementRef: i,
        ...s,
        asset: (0, l.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: z.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(K.default.Jkx0sf),
        body: F.intl.string(K.default.WhPKFP),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    r
                        ? (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, B.W5)
                        : (n(H.i.TAKE_ACTION),
                          (0, C.K4)({
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
function el(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, j.A)(t),
        d = n.cost - o,
        c = (0, G.A)(n, !0),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, v.A)(t),
        A = i.useRef(null);
    return (0, l.jsx)(es, {
        asset:
            n.type === P.o9.LEVEL
                ? (0, l.jsx)(U, { powerup: n, eventTargetRef: A, className: z.Lj })
                : (0, l.jsx)("img", { alt: "", src: c, className: z.Sl }),
        title: F.intl.string(k.default.n37JhA),
        body: F.intl.formatToPlainString(h || n.type === P.o9.LEVEL ? k.default.Yr1ogl : k.default["7MZ2tu"], {
            boostCount: d,
            perkName: n.title,
        }),
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: n.type === P.o9.PERK ? P.Pn.PERK : void 0,
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
function ei(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        c = (0, d.bG)([_.A], () => _.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, m.Ay)(g.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        h = c?.allPowerups[n.skuId],
        f = (0, G.A)(h, !0),
        p = i.useRef(null),
        C = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion);
    if (null == h && !n.isGameServer) return null;
    let x = n.isGameServer
            ? F.intl.string(k.default["9L0pAN"])
            : F.intl.formatToPlainString(k.default.gG8bI8, { perkName: n.name }),
        I = 0 === n.daysUntilExpiry ? k.default.BNS5zl : k.default["Xla/TL"],
        S = F.intl.formatToPlainString(I, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, l.jsx)(es, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, l.jsx)(o.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: z.Sl,
                  stateMachine: C ? "SM_Main_Int" : "SM_Auto",
              })
            : h?.type === P.o9.LEVEL
              ? (0, l.jsx)(U, { powerup: h, eventTargetRef: p, className: z.Lj })
              : (0, l.jsx)("img", { alt: "", src: f, className: z.Sl }),
        title: x,
        body: S,
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let l = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: l,
                        analyticsLocations: u,
                        intent: h?.type === P.o9.PERK || n.isGameServer ? P.Pn.PERK : void 0,
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
function es(e) {
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
        } = e,
        A = b(g.A.GUILD_POWERUPS_COACHMARK);
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
        scrollBehavior: A ? "close" : void 0,
        onRequestClose: () => r?.(H.i.USER_DISMISS),
    });
}
