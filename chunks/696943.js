n.d(t, {
    YX: () => Q,
    Mr: () => et,
    mn: () => J,
    HW: () => K,
    K8: () => Z,
    Gz: () => $,
    jz: () => q,
    bo: () => X,
    Gw: () => ee,
    UB: () => W,
    lw: () => Y,
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
    S = n(379229),
    I = n(990208),
    b = n(864310),
    j = n(363487),
    G = n(828162),
    v = n(72377),
    R = n(565553),
    y = n(168900),
    T = n(285828);
function M(e) {
    let { powerup: t, eventTargetRef: n, className: l } = e,
        s = { eventTargetRef: n, fit: "contain", className: l };
    switch (t.skuId) {
        case a.ec:
            return (0, i.jsx)(R.t, { ...s });
        case a.RV:
            return (0, i.jsx)(y.J, { ...s });
        case a.YG:
            return (0, i.jsx)(T.z, { ...s });
        default:
            return null;
    }
}
var L = n(249286),
    U = n(867060),
    D = n(568065),
    O = n(652215),
    P = n(746080),
    w = n(49999),
    V = n(628049),
    H = n(25525),
    k = n(105292),
    B = n(394107),
    F = n(120336);
let z =
    "https://cdn.discordapp.com/assets/content/a43712d53d007cf7433bb7934419b46aa86e2edaa3fabe5486e92f1d8cf23a83.png";
function K(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(en, {
        asset: (0, i.jsx)(v.b, { className: r()(F.Sl, F.SV) }),
        title: k.intl.formatToPlainString(H.default["Zg/m9K"], { perkName: n.title }),
        body: k.intl.formatToPlainString(H.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function W(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e;
    return (0, i.jsx)(c.H, {
        targetElementRef: l,
        position: "right",
        alignmentStrategy: "edge",
        align: "top",
        caretConfig: { align: "start" },
        ...s,
        scrollBehavior: "close",
        assetUrl:
            "https://cdn.discordapp.com/assets/content/ec10ea6e7609350fe848bf7497aba0ab1748521370f7e1f5fd257df714ff9c4c.gif",
        title: k.intl.string(H.default.QpQBPQ),
        body: k.intl.string(H.default["6hn0xF"]),
        action: {
            text: k.intl.string(k.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        onRequestClose: () => n?.(w.i.USER_DISMISS),
    });
}
function Y(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = (0, o.bG)([N.A], () => N.A.getGuild(t)?.name),
        { onActivate: d, isLoading: c, error: u } = (0, L.A)(t, n[0]),
        h = (0, I.A)(n[0], !0);
    if (((0, U.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? k.intl.formatToPlainString(H.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? k.intl.formatToPlainString(H.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : k.intl.formatToPlainString(H.default.ZF8NT6, { perk: n[0].title }),
        A = 1 === n.length;
    return (0, i.jsx)(en, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(v.b, { className: r()(F.Sl, F.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: F.Sl }),
        title: k.intl.formatToPlainString(H.default.LmpChE, { guildName: a }),
        body: m,
        actions: [
            {
                text: A ? k.intl.string(H.default.gSxlHf) : k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    (e.stopPropagation(), A ? d() : (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS));
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
        r = n.find((e) => e.skuId === a.d0),
        o = (0, I.A)(r, !0) ?? z,
        d = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: r.title,
            body: "string" == typeof r.description ? r.description : "",
            size: "video",
            asset: (0, i.jsx)("img", { alt: "", src: o, className: F.Sl }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    if (null != d)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(H.default.Ygpx4Q),
            body: k.intl.string(H.default.mmNkUA),
            size: "video",
            asset: "https://cdn.discordapp.com/assets/content/6ffaa21345f63322cf7ff8725e4e087b8c32968b8b7ba55822f0c369d7f0c03b.gif",
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let c = n.find((e) => D.m_.has(e.skuId));
    if (null != c)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(H.default["kA2c+n"]),
            body: k.intl.string(H.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/196e929b196180fe33dc1fca35f40478270ff03434e24f72ca3cc64ee94222b4.png",
                className: F.Sl,
            }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, c.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let u = n.find((e) => D.aH.has(e.skuId));
    if (null != u)
        return (0, i.jsx)(en, {
            targetElementRef: l,
            title: k.intl.string(H.default["kA2c+n"]),
            body: k.intl.string(H.default.TUilLj),
            asset: (0, i.jsx)("img", {
                alt: "",
                src: "https://cdn.discordapp.com/assets/content/477c3ad9764f37e0991cbcd8a222b8270988e9dd81e5bb3a88f47944fd5e1c4d.gif",
                className: F.Sl,
            }),
            actions: [
                {
                    text: k.intl.string(k.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, u.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let h = n.find((e) => e.skuId === a.zY);
    return null != h
        ? (0, i.jsx)(en, {
              targetElementRef: l,
              title: k.intl.string(H.default.rp0Ff1),
              body: k.intl.string(H.default["3L/DZq"]),
              size: "video",
              asset: (0, i.jsx)("img", {
                  alt: "",
                  src: "https://cdn.discordapp.com/assets/content/838731e8db0e1b209bb8b20d5acefb9effe09952f60a13067ab7ad92887b39ad.png",
                  className: F.Sl,
              }),
              actions: [
                  {
                      text: k.intl.string(k.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, h.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function q(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: r } = (0, b.A)(t),
        { gameName: a, gameName2: d } = (0, f.A)(),
        c = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: c ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(n === S.o.GAME_SERVER_HOSTING_AVAILABLE ? B.default.wXLChx : B.default["8z8RpY"]),
        body:
            n === S.o.GAME_SERVER_HOSTING_AVAILABLE
                ? k.intl.formatToPlainString(B.default["7KXp9J"], { gameName: a, gameName2: d })
                : k.intl.format(B.default["IQ1E+d"], { boostCount: r }),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function J(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(B.default["eX64+z"]),
        body: k.intl.string(B.default.NpgfEB),
        actions: [
            {
                text: k.intl.string(k.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    (n(w.i.TAKE_ACTION), (0, x.pX)(O.BVt.CHANNEL(t, P.VV.GAME_SERVERS)));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: r } = (0, f.A)(),
        a = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(h.E, {
            withReducedMotion: "halt",
            fit: "contain",
            className: F.Sl,
            stateMachine: a ? "SM_Main_Int" : "SM_Auto",
        }),
        title: k.intl.string(B.default.t3LNW1),
        body: k.intl.formatToPlainString(B.default.V9qFAU, { gameName: s, gameName2: r }),
        actions: [
            {
                text: k.intl.string(B.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    (n(w.i.TAKE_ACTION),
                        (0, C.K4)({
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
function $(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([_.A], () => _.A.getStateForGuild(t)?.allPowerups[a.d0]),
        r = (0, I.A)(s, !0) ?? z,
        { available: d } = (0, b.A)(t),
        c = D.fe - d,
        { analyticsLocations: u } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_GUILD_THEME_MEMBER);
    return (0, i.jsx)(en, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)("img", { alt: "", src: r, className: F.Sl }),
        title: k.intl.string(H.default.RK6NbY),
        body: k.intl.string(H.default.xlAqGk),
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: c,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: D.Pn.PERK,
                    }),
                        n(w.i.TAKE_ACTION));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Q(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l, ...s } = e,
        r = (0, j.A)(t);
    return (0, i.jsx)(en, {
        targetElementRef: l,
        ...s,
        asset: (0, i.jsx)(p.default, { gameId: V.Yh.FEATURED_GAME_ID }),
        aspectRatio: "6/4",
        title: k.intl.string(B.default["wy+j5s"]),
        body: k.intl.formatToPlainString(B.default["7OETrT"], {
            gameName: V.Yh.FEATURED_GAME_NAME,
            gameName2: V.Yh.SECOND_GAME_NAME,
            gameName3: V.Yh.THIRD_GAME_NAME,
        }),
        actions: [
            {
                text: k.intl.string(B.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    (n(w.i.TAKE_ACTION),
                        r
                            ? (0, G.A)(t, g.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_NEW_GAMES, V.W5)
                            : (0, C.K4)({
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
function ee(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: r, ...a } = e,
        { available: o } = (0, b.A)(t),
        d = n.cost - o,
        c = (0, I.A)(n, !0),
        { analyticsLocations: u } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        h = (0, j.A)(t),
        m = l.useRef(null);
    return (0, i.jsx)(en, {
        asset:
            n.type === D.o9.LEVEL
                ? (0, i.jsx)(M, { powerup: n, eventTargetRef: m, className: F.Lj })
                : (0, i.jsx)("img", { alt: "", src: c, className: F.Sl }),
        title: k.intl.string(H.default.n37JhA),
        body: k.intl.formatToPlainString(h || n.type === D.o9.LEVEL ? H.default.Yr1ogl : H.default["7MZ2tu"], {
            boostCount: d,
            perkName: n.title,
        }),
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: d,
                        analyticsLocation: i,
                        analyticsLocations: u,
                        intent: n.type === D.o9.PERK ? D.Pn.PERK : void 0,
                    }),
                        r(w.i.TAKE_ACTION));
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
        d = (0, o.bG)([_.A], () => _.A.getStateForGuild(t)),
        { analyticsLocations: c } = (0, A.Ay)(g.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        u = d?.allPowerups[n.skuId],
        f = (0, I.A)(u, !0),
        p = l.useRef(null),
        C = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    if (null == u && !n.isGameServer) return null;
    let x = n.isGameServer
            ? k.intl.string(H.default["9L0pAN"])
            : k.intl.formatToPlainString(H.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? H.default.BNS5zl : H.default["Xla/TL"],
        b = k.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(en, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(h.E, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: F.Sl,
                  stateMachine: C ? "SM_Main_Int" : "SM_Auto",
              })
            : u?.type === D.o9.LEVEL
              ? (0, i.jsx)(M, { powerup: u, eventTargetRef: p, className: F.Lj })
              : (0, i.jsx)("img", { alt: "", src: f, className: F.Sl }),
        title: x,
        body: b,
        actions: [
            {
                text: k.intl.string(k.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = N.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    (await (0, E.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: c,
                        intent: u?.type === D.o9.PERK || n.isGameServer ? D.Pn.PERK : void 0,
                    }),
                        r(w.i.TAKE_ACTION));
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
        align: l = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: r,
        size: a = "lg",
        asset: o,
        aspectRatio: c,
        ...h
    } = e;
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
        scrollBehavior: "close",
        onRequestClose: () => r?.(w.i.USER_DISMISS),
    });
}
