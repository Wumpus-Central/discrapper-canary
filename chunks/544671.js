n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(557711),
    a = n(620662),
    o = n(503438),
    s = n(981631),
    l = n(7826);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: f, color: _, onAction: p } = e;
    return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, o.Z)(t)
        ? (0, r.jsx)(
              i.Z,
              {
                  className: l.button,
                  size: l.buttonSize,
                  look: f,
                  color: _,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: p,
              },
              "sync",
          )
        : null;
}
