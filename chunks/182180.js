n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(100527),
    l = n(906732),
    s = n(739566),
    c = n(942951),
    d = n(834129),
    u = n(703656),
    p = n(35125),
    m = n(626751),
    f = n(891614),
    h = n(981631),
    g = n(176505),
    _ = n(388032),
    b = n(927949);
function v(e) {
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
            (0, r.jsx)(v, { username: i })
        ]
    });
}
function x(e) {
    var t, a;
    let { channel: f, message: _, compact: b } = e,
        v = (0, s.ZP)(_),
        x = (function (e) {
            let { author: t, channel: n, message: r } = e,
                a = n.guild_id,
                s = (0, c.l)({
                    user: r.author,
                    channelId: n.id,
                    guildId: a,
                    messageId: r.id
                })(t),
                { analyticsLocations: d } = (0, l.ZP)(o.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                m = r.roleSubscriptionData,
                f = i.useCallback(() => {
                    (0, u.uL)(h.Z5c.CHANNEL(a, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: d }), (null == m ? void 0 : m.role_subscription_listing_id) != null && (0, p.y8)(a, n.id, r.id, m.role_subscription_listing_id);
                }, [a, n, r, m, d]);
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
            author: v
        }),
        O = (null === (t = _.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = _.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
    return null == x
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, {
                      icon: n(570111),
                      timestamp: _.timestamp,
                      compact: b,
                      children: x
                  }),
                  O &&
                      (0, r.jsx)(y, {
                          guildId: f.guild_id,
                          user: _.author,
                          username: v.nick
                      }),
                  (0, r.jsx)(m.Z, {
                      channel: f,
                      message: _
                  })
              ]
          });
}
