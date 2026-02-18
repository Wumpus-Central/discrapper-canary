n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(155718),
    s = n(775602),
    o = n(509536),
    d = n(881635),
    c = n(71393),
    u = n(888675),
    m = n(652215),
    _ = n(985018),
    h = n(333354),
    p = n(468406),
    g = n(274993),
    A = n(218924);
function f(e) {
    let { title: t, body: n, guild: r } = e,
        o = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsx)("div", {
                className: p.ZS,
                children: (0, i.jsx)("img", { className: p.Sl, src: o ? A.A : g.A, alt: "Guild Boost Upsell" }),
            }),
            (0, i.jsxs)("div", {
                className: p.Qs,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: t }),
                    (0, i.jsx)(a.Text, {
                        color: "text-muted",
                        className: p.rf,
                        variant: "text-sm/medium",
                        children: n,
                    }),
                ],
            }),
            (0, i.jsx)("div", { children: (0, i.jsx)(d.A, { guild: r }) }),
        ],
    });
}
function x(e) {
    let { guild: t } = e;
    return (0, i.jsx)(f, {
        title: _.intl.string(h.default.qGDEON),
        body: _.intl.format(h.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(a.DUT, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        (0, o.K)({
                            guildId: t.id,
                            location: { section: m.JJy.CHANNEL_TEXT_AREA, object: m.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                        });
                    },
                    children: e,
                }),
        }),
        guild: t,
    });
}
function E(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === r.Mk.FIRST_BOOSTER ? (0, i.jsx)(x, { guild: n }) : null;
}
function C(e) {
    let { boostingPrompt: t, channel: n, compact: r } = e,
        s = n.guild_id,
        o = (0, l.bG)([c.A], () => c.A.getGuild(s), [s]);
    return null == o
        ? null
        : (0, i.jsx)(u.A, {
              contentClassName: p.FG,
              iconContainerClassName: p.zc,
              iconNode: (0, i.jsx)(a.XFE, { colorClass: p.Kk }),
              compact: r,
              children: (0, i.jsx)(E, { boostingPrompt: t, guild: o }),
          });
}
