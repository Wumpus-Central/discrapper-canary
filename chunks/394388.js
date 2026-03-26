n.d(t, { A: () => M });
var i = n(627968),
    a = n(64700),
    l = n(311907),
    r = n(554146),
    s = n(397927),
    o = n(155718),
    c = n(775602),
    d = n(793574),
    u = n(367727),
    _ = n(509536),
    m = n(881635),
    A = n(363487),
    E = n(828162),
    I = n(71393),
    T = n(888675),
    f = n(652215),
    N = n(49999),
    g = n(985018),
    C = n(333354),
    h = n(884967),
    p = n(274993),
    x = n(218924);
function R(e) {
    let { title: t, body: n, guild: a, analyticsLocations: r } = e,
        o = (0, l.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [
            (0, i.jsx)("div", {
                className: h.ZS,
                children: (0, i.jsx)("img", { className: h.Sl, src: o ? x.A : p.A, alt: "Boost gem" }),
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
                children: (0, i.jsx)(m.A, {
                    guild: a,
                    analyticsLocations: r,
                    analyticsLocation: { page: f.liQ.GUILD_CHANNEL, section: f.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function S(e) {
    let { guild: t } = e;
    a.useEffect(() => {
        (0, u.uh)(r.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: N.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, A.A)(t.id);
    return (0, i.jsx)(R, {
        title: g.intl.string(C.default.qGDEON),
        body: g.intl.format(C.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(s.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, E.A)(t.id, d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, _.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: f.JJy.CHANNEL_TEXT_AREA,
                                      object: f.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function O(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === o.Mk.FIRST_BOOSTER ? (0, i.jsx)(S, { guild: n }) : null;
}
function M(e) {
    let { boostingPrompt: t, channel: n } = e,
        a = n.guild_id,
        r = (0, l.bG)([I.A], () => I.A.getGuild(a), [a]);
    return null == r
        ? null
        : (0, i.jsx)(T.A, {
              contentClassName: h.FG,
              iconContainerClassName: h.zc,
              iconNode: (0, i.jsx)(s.XFE, { colorClass: h.Kk }),
              children: (0, i.jsx)(O, { boostingPrompt: t, guild: r }),
          });
}
