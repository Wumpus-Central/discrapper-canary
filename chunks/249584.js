n.d(t, { HW: () => U, K8: () => H, UB: () => P, bo: () => w, jz: () => V, lw: () => k, mn: () => B });
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
    g = n(976860),
    m = n(71393),
    p = n(204017),
    _ = n(379229),
    x = n(990208),
    f = n(864310),
    E = n(363487),
    C = n(828162),
    I = n(490557),
    S = n(220628),
    b = n(867060),
    N = n(568065),
    T = n(652215),
    j = n(746080),
    v = n(49999),
    y = n(294726),
    R = n(333354),
    O = n(985018),
    L = n(7946),
    D = n(108432),
    M = n(581665),
    G = n(20874);
function U(e) {
    let { guildId: t, powerup: n, channelRowRef: l, markAsDismissed: a } = e;
    return (0, i.jsx)(F, {
        asset: (0, i.jsx)(I.b, { className: s()(L.Sl, L.SV) }),
        title: O.intl.formatToPlainString(R.default["Zg/m9K"], { perkName: n.title }),
        body: O.intl.formatToPlainString(R.default["1EGXSK"], { perkName: n.title }),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_LEVEL_UP, n.skuId),
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function P(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, E.A)(t);
    return (0, i.jsx)(c.HZ, {
        targetElementRef: l,
        assetUrl: D.A,
        title: O.intl.string(R.default.QpQBPQ),
        body: O.intl.string(R.default["6hn0xF"]),
        action: {
            text: O.intl.string(O.t.RzWDqY),
            variant: "primary",
            onClick: () => {
                (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERKS);
            },
        },
        position: s ? "right" : "bottom",
        alignmentStrategy: "edge",
        align: s ? "top" : "center",
        caretConfig: s ? { align: "start" } : { align: "center" },
        onRequestClose: () => n?.(v.i.USER_DISMISS),
    });
}
function k(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: a } = e,
        r = (0, o.bG)([m.A], () => m.A.getGuild(t)?.name),
        { onActivate: d, isLoading: c, error: u } = (0, S.A)(t, n[0]),
        A = (0, x.A)(n[0], !0);
    if (((0, b.A)(u), 0 === n.length)) return;
    let g =
            n.length >= 3
                ? O.intl.formatToPlainString(R.default["6Sv+3M"], {
                      perk: n[0].title,
                      perk2: n[1].title,
                      perk3: n[2].title,
                  })
                : 2 === n.length
                  ? O.intl.formatToPlainString(R.default.wcQOqC, { perks: `${n[0].title} & ${n[1].title}` })
                  : O.intl.formatToPlainString(R.default.ZF8NT6, { perk: n[0].title }),
        p = 1 === n.length;
    return (0, i.jsx)(F, {
        size: 1 === n.length ? "video" : "lg",
        asset:
            n.length > 1
                ? (0, i.jsx)(I.b, { className: s()(L.Sl, L.SV) })
                : (0, i.jsx)("img", { alt: "", src: A, className: L.Sl }),
        title: O.intl.formatToPlainString(R.default.LmpChE, { guildName: r }),
        body: g,
        actions: [
            {
                text: p ? O.intl.string(R.default.gSxlHf) : O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: (e) => {
                    e.stopPropagation(), p ? d() : (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_PURCHASEABLE_PERKS);
                },
                loading: c,
            },
        ],
        targetElementRef: l,
        markAsDismissed: a,
    });
}
function w(e) {
    let { guildId: t, powerups: n, channelRowRef: l, markAsDismissed: s } = e,
        r = n.find((e) => e.skuId === a.FB);
    if (null != r)
        return (0, i.jsx)(F, {
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
                        (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, r.skuId);
                    },
                },
            ],
            markAsDismissed: s,
        });
    let o = n.find((e) => N.aH.has(e.skuId));
    return null != o
        ? (0, i.jsx)(F, {
              targetElementRef: l,
              title: O.intl.string(R.default["kA2c+n"]),
              body: O.intl.string(R.default.TUilLj),
              asset: (0, i.jsx)("img", { alt: "", src: M.A, className: L.Sl }),
              actions: [
                  {
                      text: O.intl.string(O.t.RzWDqY),
                      variant: "primary",
                      onClick: () => {
                          (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_NEW_PERK_AVAILABLE, o.skuId);
                      },
                  },
              ],
              markAsDismissed: s,
          })
        : null;
}
function V(e) {
    let { guildId: t, type: n, markAsDismissed: l, channelRowRef: s } = e,
        { available: a } = (0, f.A)(t),
        { gameName: d, gameName2: c } = (0, p.A)(),
        A = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(F, {
        size: "video",
        targetElementRef: s,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: L.Sl,
            stateMachine: A ? "SM_Main_Int" : "SM_Auto",
        }),
        title: O.intl.string(n === _.o.GAME_SERVER_HOSTING_AVAILABLE ? y.default.wXLChx : y.default["8z8RpY"]),
        body:
            n === _.o.GAME_SERVER_HOSTING_AVAILABLE
                ? O.intl.formatToPlainString(y.default.sj2nIF, { gameName: d, gameName2: c })
                : O.intl.format(y.default["IQ1E+d"], { boostCount: a }),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => (0, C.A)(t, h.A.GUILD_POWERUPS_COACHMARK_GAME_SERVER_HOSTING_AVAILABLE),
            },
        ],
        markAsDismissed: l,
    });
}
function B(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        s = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(F, {
        size: "video",
        targetElementRef: l,
        asset: (0, i.jsx)(r.E_w, {
            withReducedMotion: "halt",
            fit: "contain",
            className: L.Sl,
            stateMachine: s ? "SM_Main_Int" : "SM_Auto",
        }),
        title: O.intl.string(y.default["eX64+z"]),
        body: O.intl.string(y.default.NpgfEB),
        actions: [
            {
                text: O.intl.string(O.t.RzWDqY),
                variant: "primary",
                onClick: () => {
                    n(v.i.TAKE_ACTION), (0, g.pX)(T.BVt.CHANNEL(t, j.VV.GAME_SERVERS));
                },
            },
        ],
        markAsDismissed: n,
    });
}
function H(e) {
    let { guildId: t, markAsDismissed: n, channelRowRef: l } = e,
        { gameName: s, gameName2: a } = (0, p.A)(),
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion);
    return (0, i.jsx)(F, {
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
        title: O.intl.string(y.default.t3LNW1),
        body: O.intl.formatToPlainString(y.default.V9qFAU, { gameName: s, gameName2: a }),
        actions: [
            {
                text: O.intl.string(y.default.k0Y0BE),
                variant: "primary",
                onClick: () => {
                    n(v.i.TAKE_ACTION),
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
function F(e) {
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
        onRequestClose: () => a?.(v.i.USER_DISMISS),
    });
}
