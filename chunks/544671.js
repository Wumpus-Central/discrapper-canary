n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(557711),
    r = n(620662),
    a = n(503438),
    s = n(981631),
    o = n(472113);
function u(e) {
    let { activity: t, user: n, guildId: u, channelId: c, source: d, look: m, color: h, onAction: g } = e;
    return null != t && (0, r.Z)(t, s.xjy.SYNC) && (0, a.Z)(t)
        ? (0, l.jsx)(
              i.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: m,
                  color: h,
                  user: n,
                  activity: t,
                  guildId: null != u ? u : void 0,
                  channelId: c,
                  source: d,
                  onAction: g
              },
              'sync'
          )
        : null;
}
