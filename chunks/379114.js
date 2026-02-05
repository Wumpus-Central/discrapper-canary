n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(793574),
    s = n(688810),
    o = n(763754),
    d = n(447215),
    c = n(888675),
    u = n(976860),
    m = n(942075),
    _ = n(292548),
    h = n(817533),
    p = n(652215),
    g = n(746080),
    A = n(985018),
    f = n(424288);
function x(e) {
    let { username: t } = e;
    return (0, i.jsx)("div", {
        className: f._X,
        children: (0, i.jsx)(a.Text, {
            tag: "p",
            className: f._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: A.intl.format(A.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
                        a.Text,
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
function E(e) {
    let { guildId: t, user: n, username: l } = e;
    return (0, i.jsxs)("div", {
        className: f.pG,
        role: "img",
        "aria-label": A.intl.formatToPlainString(A.t["utf8+W"], { username: l }),
        children: [(0, i.jsx)(h.A, { guildId: t, user: n, className: f.sz }), (0, i.jsx)(x, { username: l })],
    });
}
function C(e) {
    let { channel: t, message: a, compact: h } = e,
        A = (0, o.Ay)(a),
        f = (function (e) {
            let { author: t, channel: n, message: i } = e,
                a = n.guild_id,
                o = (0, d.P)({ user: i.author, channelId: n.id, guildId: a, messageId: i.id })(t),
                { analyticsLocations: c } = (0, s.Ay)(r.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                _ = i.roleSubscriptionData,
                h = l.useCallback(() => {
                    (0, u.pX)(p.BVt.CHANNEL(a, g.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: c }),
                        _?.role_subscription_listing_id != null &&
                            (0, m.xH)(a, n.id, i.id, _.role_subscription_listing_id);
                }, [a, n, i, _, c]);
            return null == _
                ? null
                : (0, m.gw)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: h,
                      guildId: a,
                      roleSubscriptionData: i.roleSubscriptionData,
                  });
        })({ channel: t, message: a, author: A }),
        x =
            a.roleSubscriptionData?.total_months_subscribed != null &&
            a.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == f
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.A, { icon: n(394803), timestamp: a.timestamp, compact: h, children: f }),
                  x && (0, i.jsx)(E, { guildId: t.guild_id, user: a.author, username: A.nick }),
                  (0, i.jsx)(_.A, { channel: t, message: a }),
              ],
          });
}
