n.d(t, {
    YX: () => J,
    Mr: () => ee,
    Ns: () => Z,
    mn: () => X,
    HW: () => W,
    K8: () => Q,
    jz: () => q,
    bo: () => z,
    Gw: () => $,
    UB: () => K,
    lw: () => Y,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(512750),
    o = n(289704),
    d = n(17928),
    c = n(116833),
    u = n(338854),
    h = n(43105),
    A = n(775602),
    _ = n(793574),
    g = n(688810),
    m = n(509536),
    p = n(987144),
    f = n(976860),
    E = n(71393),
    C = n(881756),
    x = n(297930),
    I = n(645619),
    b = n(379229),
    S = n(990208),
    N = n(864310),
    T = n(363487),
    v = n(828162),
    y = n(490557),
    R = n(565553),
    j = n(168900),
    L = n(285828);
function O(e) {
    let { powerup: t, eventTargetRef: n, className: l } = e,
        s = { eventTargetRef: n, fit: "contain", className: l };
    switch (t.skuId) {
        case a.ec:
            return (0, i.jsx)(R.t, { ...s });
        case a.RV:
            return (0, i.jsx)(j.J, { ...s });
        case a.YG:
            return (0, i.jsx)(L.z, { ...s });
        default:
            return null;
    }
}
var G = n(249286),
    M = n(867060),
    D = n(800007),
    U = n(568065),
    P = n(652215),
    w = n(746080),
    k = n(49999),
    V = n(576709),
    B = n(853513),
    H = n(985018),
    F = n(945915);
function W(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(et, {
        asset: (0, i.jsx)(y.b, { className: r()(F.Sl, F.SV) }),
        title: H.intl.formatToPlainString(B.default["Zg/m9K"], { perkName: n.title }),
        body: H.intl.formatToPlainString(B.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: H.intl.string(H.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function K(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e;
    return (0, i.jsx)(u.H, {
        targetElementRef: l,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        assetUrl:
            "https://cdn.discordapp.com/assets/content/ec10ea6e7609350fe848bf7497aba0ab1748521370f7e1f5fd257df714ff9c4c.gif",
        title: H.intl.string(B.default.QpQBPQ),
        body: H.intl.string(B.default["6hn0xF"]),
        action: {
            text: H.intl.string(H.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(k.i.USER_DISMISS),
    });
}
function Y(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = (0, d.bG)([E.A], () => E.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, G.A)(t, n[0]),
        h = (0, S.A)(n[0], !0);
    if (((0, M.A)(u), 0 === n.length)) return;
    let A =
            n.length >= 3
                ? H.intl.formatToPlainString(B.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? H.intl.formatToPlainString(B.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : H.intl.formatToPlainString(B.default.ZF8NT6, { perk: n[0].title }),
        g = 1 === n.length;
    return (0, i.jsx)(et, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(y.b, { className: r()(F.Sl, F.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: F.Sl }),
        title: H.intl.formatToPlainString(B.default.LmpChE, { guildName: a }),
        body: A,
        actions: [
            {
                text: g ? H.intl.string(B.default.gSxlHf) : H.intl.string(H.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), g ? o() : (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function z(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(et, {
            targetElementRef: l,
            title: H.intl.string(B.default.Ygpx4Q),
            body: H.intl.string(B.default.mmNkUA),
            size: "video",
            asset: "https://cdn.discordapp.com/assets/content/6ffaa21345f63322cf7ff8725e4e087b8c32968b8b7ba55822f0c369d7f0c03b.gif",
            actions: [
                {
                    text: H.intl.string(H.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => U.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(et, {
            targetElementRef: l,
            title: H.intl.string(B.default["kA2c+n"]),
            body: H.intl.string(B.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: F.Sl,
            }),
            actions: [
                {
                    text: H.intl.string(H.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => U.aH.has(e.skuId));
    if (null != d)
        return (0, i.jsx)(et, {
            targetElementRef: l,
            title: H.intl.string(B.default["kA2c+n"]),
            body: H.intl.string(B.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: F.Sl,
            }),
            actions: [
                {
                    text: H.intl.string(H.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => e.skuId === a.zY);
    return null != c
        ? (0, i.jsx)(et, {
              targetElementRef: l,
              title: H.intl.string(B.default.rp0Ff1),
              body: H.intl.string(B.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: F.Sl,
              }),
              actions: [
                  {
                      text: H.intl.string(H.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function q(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: r } = (0, N.A)(t),
        { gameName: a, gameName2: c } = (0, C.A)(),
        u = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(et, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: H.intl.string(n === b.o.GAME_SERVER_HOSTING_AVAILABLE ? V.default.wXLChx : V.default["8z8RpY"]),
        body:
            n === b.o.GAME_SERVER_HOSTING_AVAILABLE
                ? H.intl.formatToPlainString(V.default["7KXp9J"], { gameName: a, gameName2: c })
                : H.intl.format(V.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: H.intl.string(H.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(et, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: H.intl.string(V.default["eX64+z"]),
        body: H.intl.string(V.default.NpgfEB),
        actions: [
            {
                text: H.intl.string(H.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(k.i.TAKE_ACTION), (0, f.pX)(P.BVt.CHANNEL(t, w.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: r } = (0, C.A)(),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(et, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: H.intl.string(V.default.t3LNW1),
        body: H.intl.formatToPlainString(V.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: H.intl.string(V.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(k.i.TAKE_ACTION),
                        (0, m.K4)({
                            guildId: t,
                            location: { section: P.JJy.GUILD_HEADER, object: P.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        r = (0, T.A)(t);
    return (0, i.jsx)(et, {
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(x.default, { gameId: D.YJ }),
        aspectRatio: "6/4",
        title: H.intl.string(V.default["wy+j5s"]),
        body: H.intl.formatToPlainString(V.default["7OETrT"], {
            gameName: "RuneScape",
            gameName2: "Necesse",
            gameName3: "Factorio",
        }),
        actions: [
            {
                text: H.intl.string(V.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(k.i.TAKE_ACTION),
                        r
                            ? (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, D.W5)
                            : (0, m.K4)({
                                  guildId: t,
                                  location: { section: P.JJy.GUILD_HEADER, object: P.ZSU.BUTTON_CTA },
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
        r = (0, T.A)(t),
        a = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    return (0, i.jsx)(et, {
        size: "video",
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(o.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: H.intl.string(V.default.Jkx0sf),
        body: H.intl.string(V.default.WhPKFP),
        actions: [
            {
                text: H.intl.string(H.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    r
                        ? (0, v.A)(t, _.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_PRICING_CHANGE, D.W5)
                        : (n(k.i.TAKE_ACTION),
                          (0, m.K4)({
                              guildId: t,
                              location: { section: P.JJy.GUILD_HEADER, object: P.ZSU.BUTTON_CTA },
                              scrollToPowerupCards: !0,
                          }));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function $(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, N.A)(t),
        d = n.cost - o,
        c = (0, S.A)(n, !0),
        { analyticsLocations: u } = (0, g.Ay)(_.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, T.A)(t),
        A = l.useRef(null);
    return (0, i.jsx)(et, {
        asset:
            n.type === U.o9.LEVEL
                ? (0, i.jsx)(O, { powerup: n, eventTargetRef: A, className: F.Lj })
                : (0, i.jsx)("img", { alt: "", src: c, className: F.Sl }),
        title: H.intl.string(B.default.n37JhA),
        body: H.intl.formatToPlainString(h || n.type === U.o9.LEVEL ? B.default.Yr1ogl : B.default["7MZ2tu"], {
            boostCount: d,
            perkName: n.title,
        }),
        actions: [
            {
                text: H.intl.string(H.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: P.liQ.GUILD_CHANNEL, section: P.JJy.GUILD_HEADER };
                    await (0, p.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: n.type === U.o9.PERK ? U.Pn.PERK : void 0,
                    }),
                        r(k.i.TAKE_ACTION);
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
        c = (0, d.bG)([I.A], () => I.A.getStateForGuild(t)),
        { analyticsLocations: u } = (0, g.Ay)(_.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        h = c?.allPowerups[n.skuId],
        m = (0, S.A)(h, !0),
        f = l.useRef(null),
        C = (0, d.bG)([A.A], () => A.A.useReducedMotion);
    if (null == h && !n.isGameServer) return null;
    let x = n.isGameServer
            ? H.intl.string(B.default["9L0pAN"])
            : H.intl.formatToPlainString(B.default.gG8bI8, { perkName: n.name }),
        b = 0 === n.daysUntilExpiry ? B.default.BNS5zl : B.default["Xla/TL"],
        N = H.intl.formatToPlainString(b, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(et, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: F.Sl,
                  stateMachine: C ? "SM_Main_Int" : "SM_Auto",
              })
            : h?.type === U.o9.LEVEL
              ? (0, i.jsx)(O, { powerup: h, eventTargetRef: f, className: F.Lj })
              : (0, i.jsx)("img", { alt: "", src: m, className: F.Sl }),
        title: x,
        body: N,
        actions: [
            {
                text: H.intl.string(H.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = E.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: P.liQ.GUILD_CHANNEL, section: P.JJy.GUILD_HEADER };
                    await (0, p.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: h?.type === U.o9.PERK || n.isGameServer ? U.Pn.PERK : void 0,
                    }),
                        r(k.i.TAKE_ACTION);
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
        align: l = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: r,
        size: a = "lg",
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
        size: a,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: l,
        onRequestClose: () => r?.(k.i.USER_DISMISS),
    });
}
