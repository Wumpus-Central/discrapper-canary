n.d(t, { HW: () => P, K8: () => F, UB: () => w, bo: () => V, jz: () => B, lw: () => k, mn: () => H });
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
    A = n(509536),
    m = n(976860),
    p = n(71393),
    g = n(204017),
    _ = n(379229),
    f = n(990208),
    x = n(864310),
    C = n(363487),
    E = n(828162),
    I = n(490557),
    b = n(220628),
    N = n(867060),
    S = n(568065),
    T = n(652215),
    v = n(746080),
    y = n(49999),
    j = n(294726),
    R = n(333354),
    O = n(985018),
    L = n(7946),
    M = n(108432),
    D = n(581665),
    U = n(392438),
    G = n(20874);
function P(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a } = e;
    return (0, i.jsx)(W, {
        asset: (0, i.jsx)(I.b, { className: s()(L.Sl, L.SV) }),
        title: O.intl.formatToPlainString(R.default["Zg/m9K"], { perkName: n.title }),
        body: O.intl.formatToPlainString(R.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function w(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, C.A)(t);
    return (0, i.jsx)(c.HZ, {
        targetElementRef: l,
        assetUrl: M.A,
        title: O.intl.string(R.default.QpQBPQ),
        body: O.intl.string(R.default["6hn0xF"]),
        action: {
            text: O.intl.string(O.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: s ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: s ? "top" : "center",
        caretConfig: s ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(y.i.USER_DISMISS),
    });
}
function k(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: a } = e,
        r = (0, o.bG)([p.A], () => p.A.getGuild(t)?.name),
        { onActivate: d, isLoading: c, error: u } = (0, b.A)(t, n[0]),
        A = (0, f.A)(n[0], !0);
    if (((0, N.A)(u), 0 === n.length)) return;
    let m =
            n.length >= 3
                ? O.intl.formatToPlainString(R.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? O.intl.formatToPlainString(R.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : O.intl.formatToPlainString(R.default.ZF8NT6, { perk: n[0].title }),
        g = 1 === n.length;
    return (0, i.jsx)(W, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(I.b, { className: s()(L.Sl, L.SV) })
                : (0, i.jsx)("img", { alt: "", src: A, className: L.Sl }),
        title: O.intl.formatToPlainString(R.default.LmpChE, { guildName: r }),
        body: m,
        actions: [
            {
                text: g ? O.intl.string(R.default.gSxlHf) : O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), g ? d() : (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function V(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(W, {
            targetElementRef: l,
            title: O.intl.string(R.default.Ygpx4Q),
            body: O.intl.string(R.default.mmNkUA),
            size: "video",
            asset: G.A,
            actions: [
                {
                    text: O.intl.string(O.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => S.m_.has(e.skuId));
    if (null != o)
        return (0, i.jsx)(W, {
            targetElementRef: l,
            title: O.intl.string(R.default["kA2c+n"]),
            body: O.intl.string(R.default.TUilLj),
            asset: (0, i.jsx)("img", { alt: "", src: U.A, className: L.Sl }),
            actions: [
                {
                    text: O.intl.string(O.t.RzWDqY),
                    variant: "primary",
                    onClick: () => {
                        (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let d = n.find((e) => S.aH.has(e.skuId));
    return null != d
        ? (0, i.jsx)(W, {
              targetElementRef: l,
              title: O.intl.string(R.default["kA2c+n"]),
              body: O.intl.string(R.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: D.A, className: L.Sl }),
              actions: [
                  {
                      text: O.intl.string(O.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, d.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function B(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, x.A)(t),
        { gameName: d, gameName2: c } = (0, g.A)(),
        A = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(W, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: L.Sl,
            stateMachine: A ? "SM_Main_Int" : "SM_Auto",
        }),
        title: O.intl.string(n === _.o.GAME_SERVER_HOSTING_AVAILABLE ? j.default.wXLChx : j.default["8z8RpY"]),
        body:
            n === _.o.GAME_SERVER_HOSTING_AVAILABLE
                ? O.intl.formatToPlainString(j.default.sj2nIF, { gameName: d, gameName2: c })
                : O.intl.format(j.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, E.A)(t, h.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function H(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(W, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: L.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: O.intl.string(j.default["eX64+z"]),
        body: O.intl.string(j.default.NpgfEB),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(y.i.TAKE_ACTION), (0, m.pX)(T.BVt.CHANNEL(t, v.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function F(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, g.A)(),
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(W, {
        size: "video",
        targetElementRef: l,
        position: "bottom",
        align: "center",
        alignmentStrategy: "edge",
        caretConfig: { align: "center" },
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: L.Sl,
            stateMachine: d ? "SM_Main_Int" : "SM_Auto",
        }),
        title: O.intl.string(j.default.t3LNW1),
        body: O.intl.formatToPlainString(j.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: O.intl.string(j.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(y.i.TAKE_ACTION),
                        (0, A.K)({
                            guildId: t,
                            location: { section: T.JJy.GUILD_HEADER, object: T.ZSU.BUTTON_CTA },
                            scrollToPowerupCards: !0,
                        });
                },
            },
        ],
        markAsDismissed: n,
    });
}
function W(e) {
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
        onRequestClose: () => a?.(y.i.USER_DISMISS),
    });
}
