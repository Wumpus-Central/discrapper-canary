n.d(t, {
    Gw: () => q,
    HW: () => H,
    K8: () => X,
    Mr: () => J,
    UB: () => F,
    bo: () => W,
    jz: () => Y,
    lw: () => K,
    mn: () => z,
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(512750),
    o = n(158954),
    d = n(311907),
    c = n(116833),
    u = n(342494),
    h = n(775602),
    A = n(793574),
    p = n(688810),
    m = n(509536),
    g = n(987144),
    _ = n(976860),
    f = n(71393),
    x = n(204017),
    C = n(645619),
    E = n(379229),
    I = n(990208),
    b = n(864310),
    N = n(363487),
    S = n(828162),
    T = n(490557),
    v = n(306113),
    y = n(220628),
    j = n(867060),
    R = n(568065),
    O = n(652215),
    L = n(746080),
    M = n(49999),
    D = n(294726),
    G = n(333354),
    U = n(985018),
    P = n(7946),
    w = n(108432),
    k = n(581665),
    V = n(392438),
    B = n(20874);
function H(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(Q, {
        asset: (0, i.jsx)(T.b, { className: a()(P.Sl, P.SV) }),
        title: U.intl.formatToPlainString(G.default["Zg/m9K"], { perkName: n.title }),
        body: U.intl.formatToPlainString(G.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: U.intl.string(U.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function F(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, N.A)(t);
    return (0, i.jsx)(u.HZ, {
        targetElementRef: l,
        assetUrl: w.A,
        title: U.intl.string(G.default.QpQBPQ),
        body: U.intl.string(G.default["6hn0xF"]),
        action: {
            text: U.intl.string(U.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: s ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: s ? "top" : "center",
        caretConfig: s ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(M.i.USER_DISMISS),
    });
}
function K(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = (0, d.bG)([f.A], () => f.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, y.A)(t, n[0]),
        h = (0, I.A)(n[0], !0);
    if (((0, j.A)(u), 0 === n.length)) return;
    let p =
            n.length >= 3
                ? U.intl.formatToPlainString(G.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? U.intl.formatToPlainString(G.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : U.intl.formatToPlainString(G.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, i.jsx)(Q, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(T.b, { className: a()(P.Sl, P.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: P.Sl }),
        title: U.intl.formatToPlainString(G.default.LmpChE, { guildName: r }),
        body: p,
        actions: [
            {
                text: m ? U.intl.string(G.default.gSxlHf) : U.intl.string(U.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function W(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = n.find((e) => e.skuId === r.FB);
    if (null != a)
        return (0, i.jsx)(Q, {
            targetElementRef: l,
            title: U.intl.string(G.default.Ygpx4Q),
            body: U.intl.string(G.default.mmNkUA),
            size: "video",
            asset: B.A,
            actions: [
                {
                    text: U.intl.string(U.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => R.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(Q, {
            targetElementRef: l,
            title: U.intl.string(G.default["kA2c+n"]),
            body: U.intl.string(G.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: V.A, className: P.Sl }),
            actions: [
                {
                    text: U.intl.string(U.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => R.aH.has(e.skuId));
    return null != d
        ? (0, i.jsx)(Q, {
              targetElementRef: l,
              title: U.intl.string(G.default["kA2c+n"]),
              body: U.intl.string(G.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: k.A, className: P.Sl }),
              actions: [
                  {
                      text: U.intl.string(U.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function Y(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, b.A)(t),
        { gameName: r, gameName2: c } = (0, x.A)(),
        u = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(Q, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: P.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: U.intl.string(n === E.o.GAME_SERVER_HOSTING_AVAILABLE ? D.default.wXLChx : D.default["8z8RpY"]),
        body:
            n === E.o.GAME_SERVER_HOSTING_AVAILABLE
                ? U.intl.formatToPlainString(D.default.sj2nIF, { gameName: r, gameName2: c })
                : U.intl.format(D.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: U.intl.string(U.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, S.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(Q, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: P.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: U.intl.string(D.default["eX64+z"]),
        body: U.intl.string(D.default.NpgfEB),
        actions: [
            {
                text: U.intl.string(U.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(M.i.TAKE_ACTION), (0, _.pX)(O.BVt.CHANNEL(t, L.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function X(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, x.A)(),
        r = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(Q, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: P.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: U.intl.string(D.default.t3LNW1),
        body: U.intl.formatToPlainString(D.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: U.intl.string(D.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(M.i.TAKE_ACTION),
                        (0, m.K)({
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
function q(e) {
    let { guildId: t, powerup: n, channelRowRef: s, markAsDismissed: a } = e,
        { available: r } = (0, b.A)(t),
        o = n.cost - r,
        d = (0, I.A)(n, !0),
        { analyticsLocations: c } = (0, p.Ay)(A.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        u = (0, N.A)(t),
        h = l.useRef(null);
    return (0, i.jsx)(Q, {
        asset:
            n.type === R.o9.LEVEL
                ? (0, i.jsx)(v.n, { powerup: n, eventTargetRef: h, className: P.Lj })
                : (0, i.jsx)("img", { alt: "", src: d, className: P.Sl }),
        title: U.intl.string(G.default.n37JhA),
        body: U.intl.formatToPlainString(G.default.Yr1ogl, { boostCount: o, perkName: n.title }),
        actions: [
            {
                text: U.intl.string(U.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: o,
                        analyticsLocation: i,
                        analyticsLocations: c,
                        intent: n.type === R.o9.PERK ? R.Pn.PERK : void 0,
                    }),
                        a(M.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: a,
        position: u ? "right" : "bottom",
        align: u ? "top" : "center",
        caretConfig: u ? { align: "start" } : { align: "center" },
    });
}
function J(e) {
    let { guildId: t, featuredExpiringPowerup: n, channelRowRef: s, markAsDismissed: a } = e,
        r = (0, d.bG)([C.A], () => C.A.getStateForGuild(t)),
        { analyticsLocations: c } = (0, p.Ay)(A.A.GUILD_POWERUPS_COACHMARK_EXPIRING_PERK),
        u = (0, N.A)(t),
        m = r?.allPowerups[n.skuId],
        _ = (0, I.A)(m, !0),
        x = l.useRef(null),
        E = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    if (null == m && !n.isGameServer) return null;
    let b = n.isGameServer
            ? U.intl.string(G.default["9L0pAN"])
            : U.intl.formatToPlainString(G.default.gG8bI8, { perkName: n.name }),
        S = 0 === n.daysUntilExpiry ? G.default.BNS5zl : G.default["Xla/TL"],
        T = U.intl.formatToPlainString(S, { boostCount: n.numExpiringBoosts, days: n.daysUntilExpiry });
    return (0, i.jsx)(Q, {
        size: n.isGameServer ? "video" : void 0,
        asset: n.isGameServer
            ? (0, i.jsx)(o.E_w, {
                  withReducedMotion: "halt",
                  fit: "contain",
                  className: P.Sl,
                  stateMachine: E ? "SM_Main_Int" : "SM_Auto",
              })
            : m?.type === R.o9.LEVEL
              ? (0, i.jsx)(v.n, { powerup: m, eventTargetRef: x, className: P.Lj })
              : (0, i.jsx)("img", { alt: "", src: _, className: P.Sl }),
        title: b,
        body: T,
        actions: [
            {
                text: U.intl.string(U.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: O.liQ.GUILD_CHANNEL, section: O.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: n.numExpiringBoosts,
                        analyticsLocation: i,
                        analyticsLocations: c,
                        intent: m?.type === R.o9.PERK || n.isGameServer ? R.Pn.PERK : void 0,
                    }),
                        a(M.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: s,
        markAsDismissed: a,
        position: u ? "right" : "bottom",
        align: u ? "top" : "center",
        caretConfig: u ? { align: "start" } : { align: "center" },
    });
}
function Q(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: l = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: a,
        size: r = "lg",
        asset: o,
        ...d
    } = e;
    return (0, i.jsx)(u.AM, {
        ...d,
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
        },
        size: r,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: l,
        onRequestClose: () => a?.(M.i.USER_DISMISS),
    });
}
