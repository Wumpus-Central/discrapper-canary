n.d(t, { Z: () => C });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(703656),
    p = n(35125),
    m = n(626751),
    f = n(891614),
    _ = n(981631),
    h = n(176505),
    g = n(388032),
    b = n(896293);
function E(e) {
    let { username: t } = e;
    return (0, r.jsx)('div', {
        className: b.welcomeCardText,
        children: (0, r.jsx)(l.Text, {
            tag: 'p',
            className: b.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: g.intl.format(g.t.MLKSlp, {
                username: t,
                usernameHook: (e, t) =>
                    (0, r.jsx)(
                        l.Text,
                        {
                            tag: 'span',
                            color: 'status-positive-text',
                            variant: 'heading-xxl/extrabold',
                            lineClamp: 3,
                            children: e
                        },
                        t
                    )
            })
        })
    });
}
function y(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, r.jsxs)('div', {
        className: b.welcomeCard,
        role: 'img',
        'aria-label': g.intl.formatToPlainString(g.t['utf8+f'], { username: i }),
        children: [
            (0, r.jsx)(f.Z, {
                guildId: t,
                user: n,
                className: b.welcomeCardBadge
            }),
            (0, r.jsx)(E, { username: i })
        ]
    });
}
function C(e) {
    var t, l;
    let { channel: f, message: g, compact: b } = e,
        E = (0, s.ZP)(g),
        C = (function (e) {
            let { author: t, channel: n, message: r } = e,
                l = n.guild_id,
                s = (0, c.l)({
                    user: r.author,
                    channelId: n.id,
                    guildId: l,
                    messageId: r.id
                })(t),
                { analyticsLocations: u } = (0, o.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                m = r.roleSubscriptionData,
                f = i.useCallback(() => {
                    ((0, d.uL)(_.Z5c.CHANNEL(l, h.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }), (null == m ? void 0 : m.role_subscription_listing_id) != null && (0, p.y8)(l, n.id, r.id, m.role_subscription_listing_id));
                }, [l, n, r, m, u]);
            return null == m
                ? null
                : (0, p.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: s,
                      roleSubscriptionOnClickHandler: f,
                      guildId: l,
                      roleSubscriptionData: r.roleSubscriptionData
                  });
        })({
            channel: f,
            message: g,
            author: E
        }),
        x = (null == (t = g.roleSubscriptionData) ? void 0 : t.total_months_subscribed) != null && (null == (l = g.roleSubscriptionData) ? void 0 : l.total_months_subscribed) <= 1;
    return null == C
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.Z, {
                      icon: n(570111),
                      timestamp: g.timestamp,
                      compact: b,
                      children: C
                  }),
                  x &&
                      (0, r.jsx)(y, {
                          guildId: f.guild_id,
                          user: g.author,
                          username: E.nick
                      }),
                  (0, r.jsx)(m.Z, {
                      channel: f,
                      message: g
                  })
              ]
          });
}
