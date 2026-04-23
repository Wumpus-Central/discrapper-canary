"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(554146),
    a = n(534514),
    o = n(834730),
    c = n(939249),
    u = n(782603),
    d = n(155718),
    _ = n(775602),
    E = n(793574),
    A = n(367727),
    m = n(509536),
    I = n(881635),
    T = n(363487),
    N = n(828162),
    g = n(71393),
    p = n(888675),
    C = n(652215),
    f = n(49999),
    R = n(985018),
    h = n(853513),
    S = n(829687),
    O = n(274993),
    x = n(218924);
function M(e) {
    let { title: t, body: n, guild: r, analyticsLocations: s } = e,
        c = (0, l.bG)([_.A], () => _.A.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: S.kL,
        children: [
            (0, i.jsx)("div", {
                className: S.ZS,
                children: (0, i.jsx)("img", { className: S.Sl, src: c ? x.A : O.A, alt: "Boost gem" }),
            }),
            (0, i.jsxs)("div", {
                className: S.Qs,
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "heading-md/semibold",
                        style: { marginTop: 0, marginBottom: "var(--space-4)" },
                        children: t,
                    }),
                    (0, i.jsx)(o.E, { color: "text-muted", className: S.rf, variant: "text-sm/medium", children: n }),
                ],
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(I.A, {
                    guild: r,
                    analyticsLocations: s,
                    analyticsLocation: { page: C.liQ.GUILD_CHANNEL, section: C.JJy.CHANNEL_TEXT_AREA },
                }),
            }),
        ],
    });
}
function D(e) {
    let { guild: t } = e;
    r.useEffect(() => {
        (0, A.uh)(s.M.FIRST_BOOSTER_UPSELL_OVERSEER, { dismissAction: f.i.AUTO_DISMISS, guildId: t.id });
    }, [t.id]);
    let n = (0, T.A)(t.id);
    return (0, i.jsx)(M, {
        title: R.intl.string(h.default.qGDEON),
        body: R.intl.format(h.default["s+HTdX"], {
            viewAllPerks: (e) =>
                (0, i.jsx)(c.D, {
                    tag: "a",
                    role: "link",
                    onClick: () => {
                        n
                            ? (0, N.A)(t.id, E.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL)
                            : (0, m.K4)({
                                  guildId: t.id,
                                  location: {
                                      section: C.JJy.CHANNEL_TEXT_AREA,
                                      object: C.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                                  },
                              });
                    },
                    children: e,
                }),
        }),
        guild: t,
        analyticsLocations: [E.A.GUILD_BOOSTING_FIRST_TIME_BOOSTER_UPSELL],
    });
}
function P(e) {
    let { boostingPrompt: t, guild: n } = e;
    return t.guildBoostUpsellType === d.Mk.FIRST_BOOSTER ? (0, i.jsx)(D, { guild: n }) : null;
}
function U(e) {
    let { boostingPrompt: t, channel: n } = e,
        r = n.guild_id,
        s = (0, l.bG)([g.A], () => g.A.getGuild(r), [r]);
    return null == s
        ? null
        : (0, i.jsx)(p.A, {
              contentClassName: S.FG,
              iconContainerClassName: S.zc,
              iconNode: (0, i.jsx)(u.X, { colorClass: S.Kk }),
              children: (0, i.jsx)(P, { boostingPrompt: t, guild: s }),
          });
}
