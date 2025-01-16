n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(557711),
    a = n(620662),
    r = n(503438),
    s = n(981631),
    o = n(472113);
function c(e) {
    let { activity: t, user: n, guildId: c, channelId: u, source: d, look: m, color: f, onAction: p } = e;
    return null != t && (0, a.Z)(t, s.xjy.SYNC) && (0, r.Z)(t)
        ? (0, i.jsx)(
              l.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: m,
                  color: f,
                  user: n,
                  activity: t,
                  guildId: null != c ? c : void 0,
                  channelId: u,
                  source: d,
                  onAction: p
              },
              'sync'
          )
        : null;
}
