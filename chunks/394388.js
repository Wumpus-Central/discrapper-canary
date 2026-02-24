n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(155718),
    s = n(775602),
    o = n(793574),
    c = n(509536),
    d = n(881635),
    u = n(71393),
    m = n(888675),
    _ = n(652215),
    A = n(985018),
    h = n(333354),
    f = n(468406),
    E = n(274993),
    g = n(218924);
function p(e) {
    let { title: t, body: n, guild: r, analyticsLocations: o } = e,
        c = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: f.kL,
        children: [
            (0, i.jsx)("div", {
                className: f.ZS,
                children: (0, i.jsx)("img", { className: f.Sl, src: c ? g.A : E.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: f.Qs,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        className: f.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(d.A, {
                    guild: r,
                    analyticsLocations: o,
                    analyticsLocation: { page: _.liQ.GUILD_CHANNEL, section: _.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function x(e) {
    let { guild: t } = e;
    return (0, i.jsx)(p, {
        title: A.intl.string(h.default.qGDEON),
        body: A.intl.format(h.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(a.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        (0, c.K)({
                            guildId: t.id,
                            location: { section: _.JJy.CHANNEL_TEXT_AREA, object: _.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                        });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [o.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function C(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === r.Mk.FIRST_BOOSTER ? (0, i.jsx)(x, { guild: n }) : null;
}
function I(e) {
    let { boostingPrompt: t, channel: n, compact: r } = e,
        s = n.guild_id,
        o = (0, l.bG)([u.A], () => u.A.getGuild(s), [s]);
    return null == o
        ? null
        : (0, i.jsx)(m.A, {
              contentClassName: f.FG,
              iconContainerClassName: f.zc,
              iconNode: (0, i.jsx)(a.XFE, { colorClass: f.Kk }),
              compact: r,
              children: (0, i.jsx)(C, { boostingPrompt: t, guild: o }),
          });
}
