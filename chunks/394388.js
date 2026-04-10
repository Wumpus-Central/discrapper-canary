"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(554146),
    a = n(397927),
    c = n(155718),
    o = n(775602),
    u = n(793574),
    d = n(367727),
    _ = n(509536),
    E = n(881635),
    A = n(363487),
    m = n(828162),
    I = n(71393),
    T = n(888675),
    g = n(652215),
    N = n(49999),
    f = n(985018),
    p = n(333354),
    C = n(884967),
    h = n(274993),
    S = n(218924);
function R(e) {
    let { title: t, body: n, guild: r, analyticsLocations: l } = e,
        c = (0, s.bG)([o.A], () => o.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [
            (0, i.jsx)("div", {
                className: C.ZS,
                children: (0, i.jsx)("img", { className: C.Sl, src: c ? S.A : h.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        className: C.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(E.A, {
                    guild: r,
                    analyticsLocations: l,
                    analyticsLocation: { page: g.liQ.GUILD_CHANNEL, section: g.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function x(e) {
    let { guild: t } = e;
    r.useEffect(() => {
        (0, d.uh)(l.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: N.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, A.A)(t.id);
    return (0, i.jsx)(R, {
        title: f.intl.string(p.default.qGDEON),
        body: f.intl.format(p.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(a.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, m.A)(t.id, u.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, _.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: g.JJy.CHANNEL_TEXT_AREA,
                                      object: g.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [u.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function O(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === c.Mk.FIRST_BOOSTER ? (0, i.jsx)(x, { guild: n }) : null;
}
function M(e) {
    let { boostingPrompt: t, channel: n } = e,
        r = n.guild_id,
        l = (0, s.bG)([I.A], () => I.A.getGuild(r), [r]);
    return null == l
        ? null
        : (0, i.jsx)(T.A, {
              contentClassName: C.FG,
              iconContainerClassName: C.zc,
              iconNode: (0, i.jsx)(a.XFE, { colorClass: C.Kk }),
              children: (0, i.jsx)(O, { boostingPrompt: t, guild: l }),
          });
}
