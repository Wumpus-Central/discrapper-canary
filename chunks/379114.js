n.d(t, {
    A: () => v,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(793574),
    s = n(688810),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(976860),
    p = n(942075),
    m = n(292548),
    f = n(817533),
    g = n(652215),
    h = n(746080),
    _ = n(985018),
    b = n(424288);

function A(e) {
    let { username: t } = e;
    return (0, r.jsx)("div", {
        className: b._X,
        children: (0, r.jsx)(l.Text, {
            tag: "p",
            className: b._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: _.intl.format(_.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, r.jsx)(
                        l.Text,
                        {
                            tag: "span",
                            color: "status-positive-text",
                            variant: "heading-xxl/extrabold",
                            lineClamp: 3,
                            children: e,
                        },
                        t,
                    ),
            }),
        }),
    });
}

function y(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, r.jsxs)("div", {
        className: b.pG,
        role: "img",
        "aria-label": _.intl.formatToPlainString(_.t["utf8+W"], {
            username: i,
        }),
        children: [
            (0, r.jsx)(f.A, {
                guildId: t,
                user: n,
                className: b.sz,
            }),
            (0, r.jsx)(A, {
                username: i,
            }),
        ],
    });
}

function v(e) {
    var t, l;
    let { channel: f, message: _, compact: b } = e,
        A = (0, o.Ay)(_),
        v = (function (e) {
            let { author: t, channel: n, message: r } = e,
                l = n.guild_id,
                o = (0, c.P)({
                    user: r.author,
                    channelId: n.id,
                    guildId: l,
                    messageId: r.id,
                })(t),
                { analyticsLocations: u } = (0, s.Ay)(a.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                m = r.roleSubscriptionData,
                f = i.useCallback(() => {
                    (0, d.pX)(g.BVt.CHANNEL(l, h.VV.ROLE_SUBSCRIPTIONS), {
                        sourceLocationStack: u,
                    }),
                        (null == m ? void 0 : m.role_subscription_listing_id) != null &&
                            (0, p.xH)(l, n.id, r.id, m.role_subscription_listing_id);
                }, [l, n, r, m, u]);
            return null == m
                ? null
                : (0, p.gw)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: f,
                      guildId: l,
                      roleSubscriptionData: r.roleSubscriptionData,
                  });
        })({
            channel: f,
            message: _,
            author: A,
        }),
        x =
            (null == (t = _.roleSubscriptionData) ? void 0 : t.total_months_subscribed) != null &&
            (null == (l = _.roleSubscriptionData) ? void 0 : l.total_months_subscribed) <= 1;
    return null == v
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.A, {
                      icon: n(394803),
                      timestamp: _.timestamp,
                      compact: b,
                      children: v,
                  }),
                  x &&
                      (0, r.jsx)(y, {
                          guildId: f.guild_id,
                          user: _.author,
                          username: A.nick,
                      }),
                  (0, r.jsx)(m.A, {
                      channel: f,
                      message: _,
                  }),
              ],
          });
}
