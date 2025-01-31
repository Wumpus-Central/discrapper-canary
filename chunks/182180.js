n.d(t, { Z: () => v });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(100527),
    s = n(906732),
    o = n(739566),
    c = n(942951),
    d = n(834129),
    u = n(703656),
    m = n(35125),
    h = n(626751),
    _ = n(891614),
    p = n(981631),
    g = n(176505),
    f = n(388032),
    x = n(204968);
function E(e) {
    let { username: t } = e;
    return (0, i.jsx)('div', {
        className: x.welcomeCardText,
        children: (0, i.jsx)(a.Text, {
            tag: 'p',
            className: x.welcomeCardText,
            color: 'status-positive-text',
            variant: 'heading-xl/medium',
            children: f.intl.format(f.t.MLKSlp, {
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
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
function C(e) {
    let { guildId: t, user: n, username: l } = e;
    return (0, i.jsxs)('div', {
        className: x.welcomeCard,
        role: 'img',
        'aria-label': f.intl.formatToPlainString(f.t['utf8+f'], { username: l }),
        children: [
            (0, i.jsx)(_.Z, {
                guildId: t,
                user: n,
                className: x.welcomeCardBadge
            }),
            (0, i.jsx)(E, { username: l })
        ]
    });
}
function v(e) {
    var t, a;
    let { channel: _, message: f, compact: x } = e,
        E = (0, o.ZP)(f),
        v = (function (e) {
            let { author: t, channel: n, message: i } = e,
                a = n.guild_id,
                o = (0, c.l)({
                    user: i.author,
                    channelId: n.id,
                    guildId: a,
                    messageId: i.id
                })(t),
                { analyticsLocations: d } = (0, s.ZP)(r.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                h = i.roleSubscriptionData,
                _ = l.useCallback(() => {
                    (0, u.uL)(p.Z5c.CHANNEL(a, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: d }), (null == h ? void 0 : h.role_subscription_listing_id) != null && (0, m.y8)(a, n.id, i.id, h.role_subscription_listing_id);
                }, [a, n, i, h, d]);
            return null == h
                ? null
                : (0, m.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: _,
                      guildId: a,
                      roleSubscriptionData: i.roleSubscriptionData
                  });
        })({
            channel: _,
            message: f,
            author: E
        }),
        I = (null === (t = f.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = f.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
    return null == v
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.Z, {
                      icon: n(570111),
                      timestamp: f.timestamp,
                      compact: x,
                      children: v
                  }),
                  I &&
                      (0, i.jsx)(C, {
                          guildId: _.guild_id,
                          user: f.author,
                          username: E.nick
                      }),
                  (0, i.jsx)(h.Z, {
                      channel: _,
                      message: f
                  })
              ]
          });
}
