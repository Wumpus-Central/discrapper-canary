"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(397927),
    l = n(793574),
    a = n(688810),
    c = n(763754),
    o = n(447215),
    u = n(888675),
    d = n(976860),
    _ = n(942075),
    E = n(292548),
    A = n(817533),
    m = n(652215),
    I = n(746080),
    T = n(985018),
    g = n(871029);
function N(e) {
    let { username: t } = e;
    return (0, i.jsx)("div", {
        className: g._X,
        children: (0, i.jsx)(s.Text, {
            tag: "p",
            className: g._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: T.intl.format(T.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
                        s.Text,
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
function f(e) {
    let { guildId: t, user: n, username: r } = e;
    return (0, i.jsxs)("div", {
        className: g.pG,
        role: "img",
        "aria-label": T.intl.formatToPlainString(T.t["utf8+W"], { username: r }),
        children: [(0, i.jsx)(A.A, { guildId: t, user: n, className: g.sz }), (0, i.jsx)(N, { username: r })],
    });
}
function p(e) {
    let { channel: t, message: s, compact: A } = e,
        T = (0, c.Ay)(s),
        g = (function (e) {
            let { author: t, channel: n, message: i } = e,
                s = n.guild_id,
                c = (0, o.P)({ user: i.author, channelId: n.id, guildId: s, messageId: i.id })(t),
                { analyticsLocations: u } = (0, a.Ay)(l.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                E = i.roleSubscriptionData,
                A = r.useCallback(() => {
                    (0, d.pX)(m.BVt.CHANNEL(s, I.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }),
                        E?.role_subscription_listing_id != null &&
                            (0, _.xH)(s, n.id, i.id, E.role_subscription_listing_id);
                }, [s, n, i, E, u]);
            return null == E
                ? null
                : (0, _.gw)({
                      username: t.nick,
                      usernameOnClickHandler: c,
                      roleSubscriptionOnClickHandler: A,
                      guildId: s,
                      roleSubscriptionData: i.roleSubscriptionData,
                  });
        })({ channel: t, message: s, author: T }),
        N =
            s.roleSubscriptionData?.total_months_subscribed != null &&
            s.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == g
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.A, { icon: n(617184), timestamp: s.timestamp, compact: A, children: g }),
                  N && (0, i.jsx)(f, { guildId: t.guild_id, user: s.author, username: T.nick }),
                  (0, i.jsx)(E.A, { channel: t, message: s }),
              ],
          });
}
