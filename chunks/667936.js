n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(302959),
    a = n(592182),
    r = n(287809),
    o = n(742617),
    d = n(793425);
function c(e) {
    let { channel: t, presenceActivity: n, embeddedApp: c, onAction: u } = e,
        h = Array.from(c.embeddedActivity.userIds),
        A = (0, l.bG)([r.default], () => r.default.getUser(h[0]));
    return null == A
        ? null
        : (0, i.jsxs)("div", {
              className: d.Eb,
              children: [
                  (0, i.jsx)("div", {
                      className: d.Il,
                      children: (0, i.jsx)(o.A, { activity: n, embeddedApp: c, channel: t }),
                  }),
                  (0, i.jsx)("div", {
                      className: d.M4,
                      children: (0, i.jsx)(a.A, {
                          type: s.M.VOICE_CHANNEL,
                          activity: n,
                          embeddedActivity: c.embeddedActivity,
                          user: A,
                          guildId: t.getGuildId(),
                          channelId: t.id,
                          buttonVariant: "primary",
                          onAction: u,
                      }),
                  }),
              ],
          });
}
