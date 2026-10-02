n.d(t, {
    YX: () => et,
    Mr: () => ei,
    mn: () => J,
    HW: () => Y,
    K8: () => Q,
    Gz: () => ee,
    jz: () => $,
    bo: () => Z,
    Gw: () => en,
    UB: () => X,
    lw: () => q,
});
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(512750),
    o = n(17928),
    d = n(116833),
    c = n(206248),
    u = n(43105),
    h = n(289704),
    m = n(775602),
    g = n(793574),
    A = n(688810),
    f = n(948134),
    p = n(892740),
    C = n(878678),
    E = n(987144),
    x = n(976860),
    N = n(71393),
    _ = n(645619),
    S = n(379229);
let I = (0, n(240921).Ay)({
    name: "2026-07-powerups-coachmark-scroll-close",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function b(e) {
    return I.useConfig({ location: e }).enabled;
}
var G = n(990208),
    j = n(864310),
    v = n(363487),
    R = n(828162),
    y = n(490557),
    T = n(565553),
    L = n(168900),
    M = n(285828);
function U(e) {
    let { powerup: t, eventTargetRef: n, className: l } = e,
        s = { eventTargetRef: n, fit: "contain", className: l };
    switch (t.skuId) {
        case a.ec:
            return (0, i.jsx)(T.t, { ...s });
        case a.RV:
            return (0, i.jsx)(L.J, { ...s });
        case a.YG:
            return (0, i.jsx)(M.z, { ...s });
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
    k = n(628049),
    B = n(25525),
    F = n(375708),
    z = n(394107),
    K = n(120336);
let W =
    "https://cdn.discordapp.com/assets/content/a43712d53d007cf7433bb7934419b46aa86e2edaa3fabe5486e92f1d8cf23a83.png";
function Y(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(el, {
        asset: (0, i.jsx)(y.b, { className: r()(K.Sl, K.SV) }),
        title: F.intl.formatToPlainString(B.default["Zg/m9K"], { perkName: n.title }),
        body: F.intl.formatToPlainString(B.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        r = b(g.A.GUILD_POWERUPS_COACHMARK);
    return (0, i.jsx)(c.H, {
        targetElementRef: l,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        scrollBehavior: r ? "close" : void 0,
        assetUrl:
            "https://cdn.discordapp.com/assets/content/ec10ea6e7609350fe848bf7497aba0ab1748521370f7e1f5fd257df714ff9c4c.gif",
        title: F.intl.string(B.default.QpQBPQ),
        body: F.intl.string(B.default["6hn0xF"]),
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
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = (0, o.bG)([N.A], () => N.A.getGuild(t)?.name),
        { onActivate: d, isLoading: c, error: u } = (0, D.A)(t, n[0]),
        h = (0, G.A)(n[0], !0);
    if (((0, O.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? F.intl.formatToPlainString(B.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? F.intl.formatToPlainString(B.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : F.intl.formatToPlainString(B.default.ZF8NT6, { perk: n[0].title }),
        A = 1 === n.length;
    return (0, i.jsx)(el, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(y.b, { className: r()(K.Sl, K.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: K.Sl }),
        title: F.intl.formatToPlainString(B.default.LmpChE, { guildName: a }),
        body: m,
        actions: [
            {
                text: A ? F.intl.string(B.default.gSxlHf) : F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    (e.stopPropagation(), A ? d() : (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS));
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function Z(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.d0),
        o = (0, G.A)(r, !0) ?? W,
        d = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(el, {
            targetElementRef: l,
            title: r.title,
            body: "string" == typeof r.description ? r.description : "",
            size: "video",
            asset: (0, i.jsx)("img", { alt: "", src: o, className: K.Sl }),
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
        return (0, i.jsx)(el, {
            targetElementRef: l,
            title: F.intl.string(B.default.Ygpx4Q),
            body: F.intl.string(B.default.mmNkUA),
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
        return (0, i.jsx)(el, {
            targetElementRef: l,
            title: F.intl.string(B.default["kA2c+n"]),
            body: F.intl.string(B.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: K.Sl,
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
        return (0, i.jsx)(el, {
            targetElementRef: l,
            title: F.intl.string(B.default["kA2c+n"]),
            body: F.intl.string(B.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: K.Sl,
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
        ? (0, i.jsx)(el, {
              targetElementRef: l,
              title: F.intl.string(B.default.rp0Ff1),
              body: F.intl.string(B.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: K.Sl,
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
function $(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: r } = (0, j.A)(t),
        { gameName: a, gameName2: d } = (0, f.A)(),
        c = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(el, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: c ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(n === S.o.GAME_SERVER_HOSTING_AVAILABLE ? z.default.wXLChx : z.default["8z8RpY"]),
        body:
            n === S.o.GAME_SERVER_HOSTING_AVAILABLE
                ? F.intl.formatToPlainString(z.default["7KXp9J"], { gameName: a, gameName2: d })
                : F.intl.format(z.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(el, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(z.default["eX64+z"]),
        body: F.intl.string(z.default.NpgfEB),
        actions: [
            {
                text: F.intl.string(F.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    (n(H.i.TAKE_ACTION), (0, x.pX)(V.BVt.CHANNEL(t, w.VV.GAME_SERVERS)));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: r } = (0, f.A)(),
        a = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(el, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: K.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: F.intl.string(z.default.t3LNW1),
        body: F.intl.formatToPlainString(z.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: F.intl.string(z.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    (n(H.i.TAKE_ACTION),
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
function ee(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([_.A], () => _.A.getStateForGuild(t)?.allPowerups[a.d0]),
        r = (0, G.A)(s, !0) ?? W,
        { available: d } = (0, j.A)(t),
        c = P.fe - d,
        { analyticsLocations: u } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_GUILD_THEME_MEMBER);
    return (0, i.jsx)(el, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)("img", { alt: "", src: r, className: K.Sl }),
        title: F.intl.string(B.default.RK6NbY),
        body: F.intl.string(B.default.xlAqGk),
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: c,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: P.Pn.PERK,
                    }),
                        n(H.i.TAKE_ACTION));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function et(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        r = (0, v.A)(t);
    return (0, i.jsx)(el, {
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(p.default, { gameId: k.Yh.FEATURED_GAME_ID }),
        aspectRatio: "6/4",
        title: F.intl.string(z.default["wy+j5s"]),
        body: F.intl.formatToPlainString(z.default["7OETrT"], {
            gameName: k.Yh.FEATURED_GAME_NAME,
            gameName2: k.Yh.SECOND_GAME_NAME,
            gameName3: k.Yh.THIRD_GAME_NAME,
        }),
        actions: [
            {
                text: F.intl.string(z.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    (n(H.i.TAKE_ACTION),
                        r
                            ? (0, R.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, k.W5)
                            : (0, C.K4)({
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
function en(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, j.A)(t),
        d = n.cost - o,
        c = (0, G.A)(n, !0),
        { analyticsLocations: u } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, v.A)(t),
        m = l.useRef(null);
    return (0, i.jsx)(el, {
        asset:
            n.type === P.o9.LEVEL
                ? (0, i.jsx)(U, { powerup: n, eventTargetRef: m, className: K.Lj })
                : (0, i.jsx)("img", { alt: "", src: c, className: K.Sl }),
        title: F.intl.string(B.default.n37JhA),
        body: F.intl.formatToPlainString(h || n.type === P.o9.LEVEL ? B.default.Yr1ogl : B.default["7MZ2tu"], {
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
                    let i = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: n.type === P.o9.PERK ? P.Pn.PERK : void 0,
                    }),
                        r(H.i.TAKE_ACTION));
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
        d = (0, o.bG)([_.A], () => _.A.getStateForGuild(t)),
        { analyticsLocations: c } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        u = d?.allPowerups[n.skuId],
        f = (0, G.A)(u, !0),
        p = l.useRef(null),
        C = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    if (null == u && !n.isGameServer) return null;
    let x = n.isGameServer
            ? F.intl.string(B.default["9L0pAN"])
            : F.intl.formatToPlainString(B.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? B.default.BNS5zl : B.default["Xla/TL"],
        I = F.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(el, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(h.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: K.Sl,
                  stateMachine: C ? "SM_Main_Int" : "SM_Auto",
              })
            : u?.type === P.o9.LEVEL
              ? (0, i.jsx)(U, { powerup: u, eventTargetRef: p, className: K.Lj })
              : (0, i.jsx)("img", { alt: "", src: f, className: K.Sl }),
        title: x,
        body: I,
        actions: [
            {
                text: F.intl.string(F.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: V.liQ.GUILD_CHANNEL, section: V.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: c,
                        intent: u?.type === P.o9.PERK || n.isGameServer ? P.Pn.PERK : void 0,
                    }),
                        r(H.i.TAKE_ACTION));
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: r,
        ...a,
    });
}
function el(e) {
    let {
            caretConfig: t = { align: "start" },
            position: n = "right",
            align: l = "top",
            alignmentStrategy: s = "edge",
            markAsDismissed: r,
            size: a = "lg",
            asset: o,
            aspectRatio: c,
            ...h
        } = e,
        m = b(g.A.GUILD_POWERUPS_COACHMARK);
    return (0, i.jsx)(u.A, {
        ...h,
        gradientColor: "pink",
        graphic: {
            type: "dynamic",
            component: d.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
            aspectRatio: c,
        },
        size: a,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: l,
        scrollBehavior: m ? "close" : void 0,
        onRequestClose: () => r?.(H.i.USER_DISMISS),
    });
}
