n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(554146),
    s = n(397927),
    o = n(155718),
    c = n(775602),
    u = n(793574),
    d = n(367727),
    _ = n(509536),
    A = n(881635),
    m = n(363487),
    E = n(828162),
    T = n(71393),
    I = n(888675),
    N = n(652215),
    g = n(49999),
    f = n(985018),
    C = n(333354),
    h = n(884967),
    p = n(274993),
    S = n(218924);
function x(e) {
    let { title: t, body: n, guild: l, analyticsLocations: r } = e,
        o = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)("div", {
                className: h.ZS,
                children: (0, i.jsx)("img", { className: h.Sl, src: o ? S.A : p.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: h.Qs,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, i.jsx)(s.Text, {
                        color: "text-muted",
                        className: h.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(A.A, {
                    guild: l,
                    analyticsLocations: r,
                    analyticsLocation: { page: N.liQ.GUILD_CHANNEL, section: N.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function R(e) {
    let { guild: t } = e;
    l.useEffect(() => {
        (0, d.uh)(r.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: g.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, m.A)(t.id);
    return (0, i.jsx)(x, {
        title: f.intl.string(C.default.qGDEON),
        body: f.intl.format(C.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(s.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, E.A)(t.id, u.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, _.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: N.JJy.CHANNEL_TEXT_AREA,
                                      object: N.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
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
    return t.guildBoostUpsellType === o.Mk.FIRST_BOOSTER ? (0, i.jsx)(R, { guild: n }) : null;
}
function M(e) {
    let { boostingPrompt: t, channel: n } = e,
        l = n.guild_id,
        r = (0, a.bG)([T.A], () => T.A.getGuild(l), [l]);
    return null == r
        ? null
        : (0, i.jsx)(I.A, {
              contentClassName: h.FG,
              iconContainerClassName: h.zc,
              iconNode: (0, i.jsx)(s.XFE, { colorClass: h.Kk }),
              children: (0, i.jsx)(O, { boostingPrompt: t, guild: r }),
          });
}
