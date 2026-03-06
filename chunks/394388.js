n.d(t, { A: () => M });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(554146),
    s = n(397927),
    o = n(155718),
    c = n(775602),
    d = n(793574),
    u = n(367727),
    m = n(509536),
    _ = n(881635),
    A = n(363487),
    f = n(828162),
    h = n(71393),
    g = n(888675),
    E = n(652215),
    p = n(49999),
    x = n(985018),
    C = n(136708),
    I = n(738448),
    T = n(274993),
    N = n(218924);
function S(e) {
    let { title: t, body: n, guild: l, analyticsLocations: r } = e,
        o = (0, a.bG)([c.A], () => c.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: I.kL,
        children: [
            (0, i.jsx)("div", {
                className: I.ZS,
                children: (0, i.jsx)("img", { className: I.Sl, src: o ? N.A : T.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: I.Qs,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, i.jsx)(s.Text, {
                        color: "text-muted",
                        className: I.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(_.A, {
                    guild: l,
                    analyticsLocations: r,
                    analyticsLocation: { page: E.liQ.GUILD_CHANNEL, section: E.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function R(e) {
    let { guild: t } = e;
    l.useEffect(() => {
        (0, u.uh)(r.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: p.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, A.A)(t.id);
    return (0, i.jsx)(S, {
        title: x.intl.string(C.default.qGDEON),
        body: x.intl.format(C.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(s.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, f.A)(t.id, d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, m.K)({
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
        analyticsLocations: [d.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function v(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === o.Mk.FIRST_BOOSTER ? (0, i.jsx)(R, { guild: n }) : null;
}
function M(e) {
    let { boostingPrompt: t, channel: n } = e,
        l = n.guild_id,
        r = (0, a.bG)([h.A], () => h.A.getGuild(l), [l]);
    return null == r
        ? null
        : (0, i.jsx)(g.A, {
              contentClassName: I.FG,
              iconContainerClassName: I.zc,
              iconNode: (0, i.jsx)(s.XFE, { colorClass: I.Kk }),
              children: (0, i.jsx)(v, { boostingPrompt: t, guild: r }),
          });
}
