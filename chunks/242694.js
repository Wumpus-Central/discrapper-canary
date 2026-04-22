n.d(t, { A: () => m });
var i = n(627968),
    s = n(534514),
    l = n(834730),
    a = n(975571),
    r = n(68925),
    o = n(137770),
    d = n(652215),
    u = n(788868),
    c = n(985018),
    g = n(800955);
function m(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: m,
            pausedAppliedGuildBoosts: _,
            fractionalPremiumState: A,
        } = e,
        h = a.A.getArticleURL(d.MVz.GUILD_BOOSTING_FAQ),
        p = m?.isPaused === !0 && A !== u.xc.FP_SUB_PAUSED,
        x = t.some((e) => null == e.premiumGuildSubscription),
        E = p && _.length > 0,
        T = p ? E : t.some((e) => null != e.premiumGuildSubscription);
    return x || T
        ? (0, i.jsxs)("div", {
              className: g.i,
              children: [
                  (0, i.jsxs)("div", {
                      className: g.b,
                      children: [
                          (0, i.jsx)(s.D, { variant: "heading-md/semibold", children: c.intl.string(c.t.W5rDjW) }),
                          (0, i.jsx)(l.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: c.intl.format(c.t.SpDz1x, { helpdeskArticle: h }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(r.A, {
                      guildBoostSlots: n,
                      premiumSubscription: m,
                      pausedAppliedGuildBoosts: _,
                      isPaused: p,
                  }),
                  (0, i.jsx)(o.A, { guildBoostSlots: t, fractionalPremiumState: A }),
              ],
          })
        : null;
}
