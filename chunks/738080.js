n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(556445),
    a = n(833349),
    s = n(90644),
    o = n(652215);
function l(e) {
    let { activity: t, user: n, guildId: l, channelId: c, source: u, onAction: d } = e;
    return null != t && (0, a.A)(t, o.jUm.SYNC) && (0, s.A)(t)
        ? (0, r.jsx)(i.A, {
              size: "sm",
              variant: "secondary",
              user: n,
              activity: t,
              guildId: null != l ? l : void 0,
              channelId: c,
              source: u,
              onAction: d,
          })
        : null;
}
