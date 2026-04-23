"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    l = n(834730),
    s = n(793574),
    a = n(688810),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(976860),
    _ = n(942075),
    E = n(292548),
    A = n(817533),
    m = n(652215),
    I = n(746080),
    T = n(985018),
    N = n(88069);
function g(e) {
    let { username: t } = e;
    return (0, i.jsx)("div", {
        className: N._X,
        children: (0, i.jsx)(l.E, {
            tag: "p",
            className: N._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: T.intl.format(T.t.MLKSln, {
                username: t,
                usernameHook: (e, t) =>
                    (0, i.jsx)(
                        l.E,
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
function p(e) {
    let { guildId: t, user: n, username: r } = e;
    return (0, i.jsxs)("div", {
        className: N.pG,
        role: "img",
        "aria-label": T.intl.formatToPlainString(T.t["utf8+W"], { username: r }),
        children: [(0, i.jsx)(A.A, { guildId: t, user: n, className: N.sz }), (0, i.jsx)(g, { username: r })],
    });
}
function C(e) {
    let { channel: t, message: l, compact: A } = e,
        T = (0, o.Ay)(l),
        N = (function (e) {
            let { author: t, channel: n, message: i } = e,
                l = n.guild_id,
                o = (0, c.P)({ user: i.author, channelId: n.id, guildId: l, messageId: i.id })(t),
                { analyticsLocations: u } = (0, a.Ay)(s.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
                E = i.roleSubscriptionData,
                A = r.useCallback(() => {
                    (0, d.pX)(m.BVt.CHANNEL(l, I.VV.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }),
                        E?.role_subscription_listing_id != null &&
                            (0, _.xH)(l, n.id, i.id, E.role_subscription_listing_id);
                }, [l, n, i, E, u]);
            return null == E
                ? null
                : (0, _.gw)({
                      username: t.nick,
                      usernameOnClickHandler: o,
                      roleSubscriptionOnClickHandler: A,
                      guildId: l,
                      roleSubscriptionData: i.roleSubscriptionData,
                  });
        })({ channel: t, message: l, author: T }),
        g =
            l.roleSubscriptionData?.total_months_subscribed != null &&
            l.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == N
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(u.A, { icon: n(617184), timestamp: l.timestamp, compact: A, children: N }),
                  g && (0, i.jsx)(p, { guildId: t.guild_id, user: l.author, username: T.nick }),
                  (0, i.jsx)(E.A, { channel: t, message: l }),
              ],
          });
}
