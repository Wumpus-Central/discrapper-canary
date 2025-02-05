n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var i = n(557711),
    r = n(620662),
    a = n(503438),
    s = n(981631),
    o = n(472113);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: m, color: p, onAction: h } = e;
    return null != t && (0, r.Z)(t, s.xjy.SYNC) && (0, a.Z)(t)
        ? (0, l.jsx)(
              i.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: m,
                  color: p,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: h
              },
              'sync'
          )
        : null;
}
