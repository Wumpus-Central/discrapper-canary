n.d(t, { Z: () => E });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    l = n(100527),
    o = n(906732),
    s = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(703656),
    p = n(35125),
    m = n(626751),
    f = n(891614),
    h = n(981631),
    g = n(176505),
    _ = n(388032),
    b = n(896293);
function x(e) {
    let { username: t } = e;
    return (0, r.jsx)('div', {
        className: b.welcomeCardText,
        children: (0, r.jsx)(a.Text, {
            tag: 'p',
            className: b.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: _.NW.format(_.t.MLKSlp, {
                username: t,
                usernameHook: (e, t) =>
                    (0, r.jsx)(
                        a.Text,
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
        'aria-label': _.NW.formatToPlainString(_.t['utf8+f'], { username: i }),
        children: [
            (0, r.jsx)(f.Z, {
                guildId: t,
                user: n,
                className: b.welcomeCardBadge
            }),
            (0, r.jsx)(x, { username: i })
        ]
    });
}
function E(e) {
    var t, a;
    let { channel: f, message: _, compact: b } = e,
        x = (0, s.ZP)(_),
        E = (function (e) {
            let { author: t, channel: n, message: r } = e,
                a = n.guild_id,
                s = (0, c.l)({
                    user: r.author,
                    channelId: n.id,
                    guildId: a,
                    messageId: r.id
                })(t),
                { analyticsLocations: u } = (0, o.ZP)(l.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                m = r.roleSubscriptionData,
                f = i.useCallback(() => {
                    (0, d.uL)(h.Z5c.CHANNEL(a, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }), (null == m ? void 0 : m.role_subscription_listing_id) != null && (0, p.y8)(a, n.id, r.id, m.role_subscription_listing_id);
                }, [a, n, r, m, u]);
            return null == m
                ? null
                : (0, p.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: s,
                      roleSubscriptionOnClickHandler: f,
                      guildId: a,
                      roleSubscriptionData: r.roleSubscriptionData
                  });
        })({
            channel: f,
            message: _,
            author: x
        }),
        v = (null == (t = _.roleSubscriptionData) ? void 0 : t.total_months_subscribed) != null && (null == (a = _.roleSubscriptionData) ? void 0 : a.total_months_subscribed) <= 1;
    return null == E
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.Z, {
                      icon: n(570111),
                      timestamp: _.timestamp,
                      compact: b,
                      children: E
                  }),
                  v &&
                      (0, r.jsx)(y, {
                          guildId: f.guild_id,
                          user: _.author,
                          username: x.nick
                      }),
                  (0, r.jsx)(m.Z, {
                      channel: f,
                      message: _
                  })
              ]
          });
}
