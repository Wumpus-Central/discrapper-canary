n.d(t, { Gw: () => q, HW: () => B, K8: () => z, UB: () => H, bo: () => K, jz: () => W, lw: () => F, mn: () => Y });
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
    C = n(379229),
    E = n(990208),
    I = n(864310),
    b = n(363487),
    N = n(828162),
    S = n(490557),
    T = n(306113),
    v = n(220628),
    y = n(867060),
    j = n(568065),
    R = n(652215),
    O = n(746080),
    L = n(49999),
    M = n(294726),
    D = n(333354),
    G = n(985018),
    U = n(7946),
    P = n(108432),
    w = n(581665),
    k = n(392438),
    V = n(20874);
function B(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: s } = e;
    return (0, i.jsx)(X, {
        asset: (0, i.jsx)(S.b, { className: a()(U.Sl, U.SV) }),
        title: G.intl.formatToPlainString(D.default["Zg/m9K"], { perkName: n.title }),
        body: G.intl.formatToPlainString(D.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: G.intl.string(G.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function H(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, b.A)(t);
    return (0, i.jsx)(u.HZ, {
        targetElementRef: l,
        assetUrl: P.A,
        title: G.intl.string(D.default.QpQBPQ),
        body: G.intl.string(D.default["6hn0xF"]),
        action: {
            text: G.intl.string(G.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: s ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: s ? "top" : "center",
        caretConfig: s ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(L.i.USER_DISMISS),
    });
}
function F(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = (0, d.bG)([f.A], () => f.A.getGuild(t)?.name),
        { onActivate: o, isLoading: c, error: u } = (0, v.A)(t, n[0]),
        h = (0, E.A)(n[0], !0);
    if (((0, y.A)(u), 0 === n.length)) return;
    let p =
            n.length >= 3
                ? G.intl.formatToPlainString(D.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? G.intl.formatToPlainString(D.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : G.intl.formatToPlainString(D.default.ZF8NT6, { perk: n[0].title }),
        m = 1 === n.length;
    return (0, i.jsx)(X, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(S.b, { className: a()(U.Sl, U.SV) })
                : (0, i.jsx)("img", { alt: "", src: h, className: U.Sl }),
        title: G.intl.formatToPlainString(D.default.LmpChE, { guildName: r }),
        body: p,
        actions: [
            {
                text: m ? G.intl.string(D.default.gSxlHf) : G.intl.string(G.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), m ? o() : (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: s,
    });
}
function K(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        a = n.find((e) => e.skuId === r.FB);
    if (null != a)
        return (0, i.jsx)(X, {
            targetElementRef: l,
            title: G.intl.string(D.default.Ygpx4Q),
            body: G.intl.string(D.default.mmNkUA),
            size: "video",
            asset: V.A,
            actions: [
                {
                    text: G.intl.string(G.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, a.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => j.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(X, {
            targetElementRef: l,
            title: G.intl.string(D.default["kA2c+n"]),
            body: G.intl.string(D.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: k.A, className: U.Sl }),
            actions: [
                {
                    text: G.intl.string(G.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => j.aH.has(e.skuId));
    return null != d
        ? (0, i.jsx)(X, {
              targetElementRef: l,
              title: G.intl.string(D.default["kA2c+n"]),
              body: G.intl.string(D.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: w.A, className: U.Sl }),
              actions: [
                  {
                      text: G.intl.string(G.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function W(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, I.A)(t),
        { gameName: r, gameName2: c } = (0, x.A)(),
        u = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(X, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: U.Sl,
            stateMachine: u ? "SM_Main_Int" : "SM_Auto",
        }),
        title: G.intl.string(n === C.o.GAME_SERVER_HOSTING_AVAILABLE ? M.default.wXLChx : M.default["8z8RpY"]),
        body:
            n === C.o.GAME_SERVER_HOSTING_AVAILABLE
                ? G.intl.formatToPlainString(M.default.sj2nIF, { gameName: r, gameName2: c })
                : G.intl.format(M.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: G.intl.string(G.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, N.A)(t, A.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function Y(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(X, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: U.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: G.intl.string(M.default["eX64+z"]),
        body: G.intl.string(M.default.NpgfEB),
        actions: [
            {
                text: G.intl.string(G.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(L.i.TAKE_ACTION), (0, _.pX)(R.BVt.CHANNEL(t, O.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function z(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, x.A)(),
        r = (0, d.bG)([h.A], () => h.A.useReducedMotion);
    return (0, i.jsx)(X, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(o.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: U.Sl,
            stateMachine: r ? "SM_Main_Int" : "SM_Auto",
        }),
        title: G.intl.string(M.default.t3LNW1),
        body: G.intl.formatToPlainString(M.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: G.intl.string(M.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(L.i.TAKE_ACTION),
                        (0, m.K)({
                            guildId: t,
                            location: { section: R.JJy.GUILD_HEADER, object: R.ZSU.BUTTON_CTA },
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
        { available: r } = (0, I.A)(t),
        o = n.cost - r,
        d = (0, E.A)(n, !0),
        { analyticsLocations: c } = (0, p.Ay)(A.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK),
        u = (0, b.A)(t),
        h = l.useRef(null);
    return (0, i.jsx)(X, {
        asset:
            n.type === j.o9.LEVEL
                ? (0, i.jsx)(T.n, { powerup: n, eventTargetRef: h, className: U.Lj })
                : (0, i.jsx)("img", { alt: "", src: d, className: U.Sl }),
        title: G.intl.string(D.default.n37JhA),
        body: G.intl.formatToPlainString(D.default.Yr1ogl, { boostCount: o, perkName: n.title }),
        actions: [
            {
                text: G.intl.string(G.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = f.A.getGuild(t);
                    if (null == e) return;
                    let i = { page: R.liQ.GUILD_CHANNEL, section: R.JJy.GUILD_HEADER };
                    await (0, g.g)({
                        guild: e,
                        numberOfBoostsToAdd: o,
                        analyticsLocation: i,
                        analyticsLocations: c,
                        intent: n.type === j.o9.LEVEL ? j.Pn.LEVEL : j.Pn.PERK,
                    }),
                        a(L.i.TAKE_ACTION);
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
function X(e) {
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
        onRequestClose: () => a?.(L.i.USER_DISMISS),
    });
}
