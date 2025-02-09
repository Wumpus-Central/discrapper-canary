n.d(t, { Z: () => E });
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
    _ = n(626751),
    h = n(891614),
    p = n(981631),
    g = n(176505),
    f = n(388032),
    x = n(364761);
function C(e) {
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
function v(e) {
    let { guildId: t, user: n, username: l } = e;
    return (0, i.jsxs)('div', {
        className: x.welcomeCard,
        role: 'img',
        'aria-label': f.intl.formatToPlainString(f.t['utf8+f'], { username: l }),
        children: [
            (0, i.jsx)(h.Z, {
                guildId: t,
                user: n,
                className: x.welcomeCardBadge
            }),
            (0, i.jsx)(C, { username: l })
        ]
    });
}
function E(e) {
    var t, a;
    let { channel: h, message: f, compact: x } = e,
        C = (0, o.ZP)(f),
        E = (function (e) {
            let { author: t, channel: n, message: i } = e,
                a = n.guild_id,
                o = (0, c.l)({
                    user: i.author,
                    channelId: n.id,
                    guildId: a,
                    messageId: i.id
                })(t),
                { analyticsLocations: d } = (0, s.ZP)(r.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                _ = i.roleSubscriptionData,
                h = l.useCallback(() => {
                    (0, u.uL)(p.Z5c.CHANNEL(a, g.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: d }), (null == _ ? void 0 : _.role_subscription_listing_id) != null && (0, m.y8)(a, n.id, i.id, _.role_subscription_listing_id);
                }, [a, n, i, _, d]);
            return null == _
                ? null
                : (0, m.Tn)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: h,
                      guildId: a,
                      roleSubscriptionData: i.roleSubscriptionData
                  });
        })({
            channel: h,
            message: f,
            author: C
        }),
        I = (null === (t = f.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = f.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
    return null == E
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.Z, {
                      icon: n(570111),
                      timestamp: f.timestamp,
                      compact: x,
                      children: E
                  }),
                  I &&
                      (0, i.jsx)(v, {
                          guildId: h.guild_id,
                          user: f.author,
                          username: C.nick
                      }),
                  (0, i.jsx)(_.Z, {
                      channel: h,
                      message: f
                  })
              ]
          });
}
