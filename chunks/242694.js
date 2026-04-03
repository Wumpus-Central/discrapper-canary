n.d(t, { A: () => m });
var i = n(627968),
    s = n(397927),
    l = n(975571),
    a = n(68925),
    r = n(137770),
    o = n(652215),
    d = n(788868),
    c = n(985018),
    u = n(485707);
function m(e) {
    let {
            guildBoostSlots: t,
            guildBoostSlotsByGuildId: n,
            premiumSubscription: m,
            pausedAppliedGuildBoosts: g,
            fractionalPremiumState: _,
        } = e,
        x = l.A.getArticleURL(o.MVz.GUILD_BOOSTING_FAQ),
        A = m?.isPaused === !0 && _ !== d.xc.FP_SUB_PAUSED,
        h = t.some((e) => null == e.premiumGuildSubscription),
        p = A && g.length > 0,
        T = A ? p : t.some((e) => null != e.premiumGuildSubscription);
    return h || T
        ? (0, i.jsxs)("div", {
              className: u.i,
              children: [
                  (0, i.jsxs)("div", {
                      className: u.b,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              children: c.intl.string(c.t.W5rDjW),
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: c.intl.format(c.t.SpDz1x, { helpdeskArticle: x }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(a.A, {
                      guildBoostSlots: n,
                      premiumSubscription: m,
                      pausedAppliedGuildBoosts: g,
                      isPaused: A,
                  }),
                  (0, i.jsx)(r.A, { guildBoostSlots: t, fractionalPremiumState: _ }),
              ],
          })
        : null;
}
