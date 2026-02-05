i.d(t, { A: () => o });
var n = i(627968);
i(64700);
var a = i(556445),
    l = i(833349),
    r = i(90644),
    s = i(652215);
function o(e) {
    let { activity: t, user: i, guildId: o, channelId: d, source: c, onAction: u } = e;
    return null != t && (0, l.A)(t, s.jUm.SYNC) && (0, r.A)(t)
        ? (0, n.jsx)(a.A, {
              size: "sm",
              variant: "secondary",
              user: i,
              activity: t,
              guildId: o ?? void 0,
              channelId: d,
              source: c,
              onAction: u,
          })
        : null;
}
