n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(100527),
    s = n(906732),
    l = n(739566),
    c = n(942951),
    u = n(834129),
    d = n(703656),
    f = n(35125),
    _ = n(626751),
    p = n(891614),
    h = n(981631),
    m = n(176505),
    g = n(388032),
    E = n(545716);
function b(e) {
    let { author: t, channel: n, message: r } = e,
        o = n.guild_id,
        l = (0, c.l)({
            user: r.author,
            channelId: n.id,
            guildId: o,
            messageId: r.id,
        })(t),
        { analyticsLocations: u } = (0, s.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE),
        _ = r.roleSubscriptionData,
        p = i.useCallback(() => {
            (0, d.uL)(h.Z5c.CHANNEL(o, m.oC.ROLE_SUBSCRIPTIONS), { sourceLocationStack: u }),
                (null == _ ? void 0 : _.role_subscription_listing_id) != null &&
                    (0, f.y8)(o, n.id, r.id, _.role_subscription_listing_id);
        }, [o, n, r, _, u]);
    return null == _
        ? null
        : (0, f.Tn)({
              username: t.nick,
              usernameOnClickHandler: l,
              roleSubscriptionOnClickHandler: p,
              guildId: o,
              roleSubscriptionData: r.roleSubscriptionData,
          });
}
function y(e) {
    let { username: t } = e;
    return (0, r.jsx)("div", {
        className: E.welcomeCardText,
        children: (0, r.jsx)(o.Text, {
            tag: "p",
            className: E.welcomeCardText,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: g.intl.format(g.t.MLKSlp, {
                username: t,
                usernameHook: (e, t) =>
                    (0, r.jsx)(
                        o.Text,
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
function O(e) {
    let { guildId: t, user: n, username: i } = e;
    return (0, r.jsxs)("div", {
        className: E.welcomeCard,
        role: "img",
        "aria-label": g.intl.formatToPlainString(g.t["utf8+f"], { username: i }),
        children: [
            (0, r.jsx)(p.Z, {
                guildId: t,
                user: n,
                className: E.welcomeCardBadge,
            }),
            (0, r.jsx)(y, { username: i }),
        ],
    });
}
function v(e) {
    var t, i;
    let { channel: o, message: a, compact: s } = e,
        c = (0, l.ZP)(a),
        d = b({
            channel: o,
            message: a,
            author: c,
        }),
        f =
            (null == (t = a.roleSubscriptionData) ? void 0 : t.total_months_subscribed) != null &&
            (null == (i = a.roleSubscriptionData) ? void 0 : i.total_months_subscribed) <= 1;
    return null == d
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.Z, {
                      icon: n(570111),
                      timestamp: a.timestamp,
                      compact: s,
                      children: d,
                  }),
                  f &&
                      (0, r.jsx)(O, {
                          guildId: o.guild_id,
                          user: a.author,
                          username: c.nick,
                      }),
                  (0, r.jsx)(_.Z, {
                      channel: o,
                      message: a,
                  }),
              ],
          });
}
