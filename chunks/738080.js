n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(556445),
    a = n(833349),
    s = n(90644),
    r = n(652215);
function o(e) {
    let { activity: t, user: n, guildId: o, channelId: c, source: d, onAction: u } = e;
    return null != t && (0, a.A)(t, r.jUm.SYNC) && (0, s.A)(t)
        ? (0, i.jsx)(l.A, {
              size: "sm",
              variant: "secondary",
              user: n,
              activity: t,
              guildId: o ?? void 0,
              channelId: c,
              source: d,
              onAction: u,
          })
        : null;
}
