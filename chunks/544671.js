n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(557711),
    i = n(620662),
    a = n(503438),
    o = n(981631),
    s = n(139157);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: f, color: p, onAction: m } = e;
    return null != t && (0, i.Z)(t, o.xjy.SYNC) && (0, a.Z)(t)
        ? (0, r.jsx)(
              l.Z,
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
