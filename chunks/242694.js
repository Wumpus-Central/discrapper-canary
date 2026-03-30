n.d(t, { A: () => c });
var i = n(627968),
    s = n(397927),
    l = n(975571),
    a = n(137770),
    r = n(652215),
    o = n(985018),
    d = n(485707);
function c(e) {
    let { guildBoostSlots: t, fractionalPremiumState: n } = e,
        c = l.A.getArticleURL(r.MVz.GUILD_BOOSTING_FAQ);
    return t.some((e) => null == e.premiumGuildSubscription)
        ? (0, i.jsxs)("div", {
              className: d.i,
              children: [
                  (0, i.jsxs)("div", {
                      className: d.b,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              children: o.intl.string(o.t.W5rDjW),
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: o.intl.format(o.t.SpDz1x, { helpdeskArticle: c }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(a.A, { guildBoostSlots: t, fractionalPremiumState: n }),
              ],
          })
        : null;
}
