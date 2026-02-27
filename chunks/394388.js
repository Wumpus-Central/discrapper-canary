n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(155718),
    s = n(775602),
    o = n(793574),
    c = n(509536),
    d = n(881635),
    u = n(363487),
    m = n(828162),
    _ = n(71393),
    A = n(888675),
    E = n(652215),
    h = n(985018),
    f = n(333354),
    g = n(468406),
    p = n(274993),
    x = n(218924);
function C(e) {
    let { title: t, body: n, guild: r, analyticsLocations: o } = e,
        c = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", {
                className: g.ZS,
                children: (0, i.jsx)("img", { className: g.Sl, src: c ? x.A : p.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: g.Qs,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        className: g.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(d.A, {
                    guild: r,
                    analyticsLocations: o,
                    analyticsLocation: { page: E.liQ.GUILD_CHANNEL, section: E.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function I(e) {
    let { guild: t } = e,
        n = (0, u.A)(t.id);
    return (0, i.jsx)(C, {
        title: h.intl.string(f.default.qGDEON),
        body: h.intl.format(f.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(a.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, m.A)(t.id, o.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, c.K)({
                                  guildId: t.id,
                                  location: {
                                      section: E.JJy.CHANNEL_TEXT_AREA,
                                      object: E.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [o.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function T(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === r.Mk.FIRST_BOOSTER ? (0, i.jsx)(I, { guild: n }) : null;
}
function N(e) {
    let { boostingPrompt: t, channel: n, compact: r } = e,
        s = n.guild_id,
        o = (0, l.bG)([_.A], () => _.A.getGuild(s), [s]);
    return null == o
        ? null
        : (0, i.jsx)(A.A, {
              contentClassName: g.FG,
              iconContainerClassName: g.zc,
              iconNode: (0, i.jsx)(a.XFE, { colorClass: g.Kk }),
              compact: r,
              children: (0, i.jsx)(T, { boostingPrompt: t, guild: o }),
          });
}
