n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(557711),
    a = n(620662),
    o = n(503438),
    s = n(981631);
function l(e) {
    let { activity: t, user: n, guildId: l, channelId: c, source: u, onAction: d } = e;
    return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, o.Z)(t)
        ? (0, r.jsx)(i.Z, {
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
