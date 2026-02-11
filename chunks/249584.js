n.d(t, { Gw: () => Y, HW: () => k, K8: () => W, UB: () => V, bo: () => H, jz: () => F, lw: () => B, mn: () => K });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(512750),
    r = n(158954),
    o = n(311907),
    d = n(116833),
    c = n(342494),
    u = n(775602),
    h = n(793574),
    A = n(688810),
    m = n(509536),
    p = n(987144),
    g = n(976860),
    _ = n(71393),
    f = n(204017),
    x = n(379229),
    C = n(990208),
    E = n(864310),
    I = n(363487),
    b = n(828162),
    N = n(490557),
    S = n(220628),
    T = n(867060),
    v = n(568065),
    y = n(652215),
    j = n(746080),
    R = n(49999),
    O = n(738072),
    L = n(136708),
    M = n(985018),
    D = n(861236),
    G = n(108432),
    U = n(581665),
    P = n(392438),
    w = n(20874);
function k(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a } = e;
    return (0, i.jsx)(z, {
        asset: (0, i.jsx)(N.b, { className: s()(D.Sl, D.SV) }),
        title: M.intl.formatToPlainString(L.default["Zg/m9K"], { perkName: n.title }),
        body: M.intl.formatToPlainString(L.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: M.intl.string(M.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function V(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, I.A)(t);
    return (0, i.jsx)(c.HZ, {
        targetElementRef: l,
        assetUrl: G.A,
        title: M.intl.string(L.default.QpQBPQ),
        body: M.intl.string(L.default["6hn0xF"]),
        action: {
            text: M.intl.string(M.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: s ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: s ? "top" : "center",
        caretConfig: s ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(R.i.USER_DISMISS),
    });
}
function B(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: a } = e,
        r = (0, o.bG)([_.A], () => _.A.getGuild(t)?.name),
        { onActivate: d, isLoading: c, error: u } = (0, S.A)(t, n[0]),
        A = (0, C.A)(n[0], !0);
    if (((0, T.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? M.intl.formatToPlainString(L.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? M.intl.formatToPlainString(L.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : M.intl.formatToPlainString(L.default.ZF8NT6, { perk: n[0].title }),
        p = 1 === n.length;
    return (0, i.jsx)(z, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(N.b, { className: s()(D.Sl, D.SV) })
                : (0, i.jsx)("img", { alt: "", src: A, className: D.Sl }),
        title: M.intl.formatToPlainString(L.default.LmpChE, { guildName: r }),
        body: m,
        actions: [
            {
                text: p ? M.intl.string(L.default.gSxlHf) : M.intl.string(M.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), p ? d() : (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function H(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(z, {
            targetElementRef: l,
            title: M.intl.string(L.default.Ygpx4Q),
            body: M.intl.string(L.default.mmNkUA),
            size: "video",
            asset: w.A,
            actions: [
                {
                    text: M.intl.string(M.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => v.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(z, {
            targetElementRef: l,
            title: M.intl.string(L.default["kA2c+n"]),
            body: M.intl.string(L.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: P.A, className: D.Sl }),
            actions: [
                {
                    text: M.intl.string(M.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => v.aH.has(e.skuId));
    return null != d
        ? (0, i.jsx)(z, {
              targetElementRef: l,
              title: M.intl.string(L.default["kA2c+n"]),
              body: M.intl.string(L.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: U.A, className: D.Sl }),
              actions: [
                  {
                      text: M.intl.string(M.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function F(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, E.A)(t),
        { gameName: d, gameName2: c } = (0, f.A)(),
        A = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(z, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: D.Sl,
            stateMachine: A ? "SM_Main_Int" : "SM_Auto",
        }),
        title: M.intl.string(n === x.o.GAME_SERVER_HOSTING_AVAILABLE ? O.default.wXLChx : O.default["8z8RpY"]),
        body:
            n === x.o.GAME_SERVER_HOSTING_AVAILABLE
                ? M.intl.formatToPlainString(O.default.sj2nIF, { gameName: d, gameName2: c })
                : M.intl.format(O.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: M.intl.string(M.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, b.A)(t, h.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function K(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(z, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: D.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: M.intl.string(O.default["eX64+z"]),
        body: M.intl.string(O.default.NpgfEB),
        actions: [
            {
                text: M.intl.string(M.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(R.i.TAKE_ACTION), (0, g.pX)(y.BVt.CHANNEL(t, j.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function W(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, f.A)(),
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(z, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: D.Sl,
            stateMachine: d ? "SM_Main_Int" : "SM_Auto",
        }),
        title: M.intl.string(O.default.t3LNW1),
        body: M.intl.formatToPlainString(O.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: M.intl.string(O.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(R.i.TAKE_ACTION),
                        (0, m.K)({
                            guildId: t,
                            location: { section: y.JJy.GUILD_HEADER, object: y.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function Y(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a } = e,
        { available: r } = (0, E.A)(t),
        o = n.cost - r,
        d = (0, C.A)(n, !0),
        { analyticsLocations: c } = (0, A.Ay)(h.A.GUILD_POWERUPS_COACHMARK_BOOST_TO_UNLOCK);
    return (0, i.jsx)(z, {
        asset:
            n.type === v.o9.LEVEL
                ? (0, i.jsx)(N.b, { className: s()(D.Sl, D.SV) })
                : (0, i.jsx)("img", { alt: "", src: d, className: D.Sl }),
        title: M.intl.string(L.default.n37JhA),
        body: M.intl.formatToPlainString(L.default.Yr1ogl, { boostCount: o, perkName: n.title }),
        actions: [
            {
                text: M.intl.string(M.t.oPAx73),
                variant: "primary",
                onClick: async () => {
                    let e = _.A.getGuild(t);
                    if (null == e) return;
                    let n = { page: y.liQ.GUILD_CHANNEL, section: y.JJy.GUILD_HEADER };
                    await (0, p.g)({ guild: e, numberOfBoostsToAdd: o, analyticsLocation: n, analyticsLocations: c }),
                        a(R.i.TAKE_ACTION);
                },
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function z(e) {
    let {
        caretConfig: t = { align: "start" },
        position: n = "right",
        align: l = "top",
        alignmentStrategy: s = "edge",
        markAsDismissed: a,
        size: r = "lg",
        asset: o,
        ...u
    } = e;
    return (0, i.jsx)(c.AM, {
        ...u,
        graphic: {
            type: "dynamic",
            component: d.DynamicGraphicComponent.GUILD_POWERUPS_COACHMARK_ASSET,
            props: { asset: o },
        },
        size: r,
        shouldShow: !0,
        position: n,
        caretConfig: t,
        alignmentStrategy: s,
        align: l,
        onRequestClose: () => a?.(R.i.USER_DISMISS),
    });
}
