n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(557711),
    l = n(620662),
    a = n(503438),
    o = n(981631),
    s = n(145131);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: f, color: p, onAction: m } = e;
    return null != t && (0, l.Z)(t, o.xjy.SYNC) && (0, a.Z)(t)
        ? (0, r.jsx)(
              i.Z,
              {
                  className: s.button,
                  size: s.buttonSize,
                  look: f,
                  color: p,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: m
              },
              'sync'
          )
        : null;
}
