n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(246841),
    a = n(620662),
    o = n(503438),
    s = n(981631),
    l = n(145131);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: f } = e;
    return null != t && (0, a.Z)(t, s.xjy.PLAY) && (0, o.Z)(t)
        ? (0, r.jsx)(
              i.Z,
              {
                  className: l.button,
                  size: l.buttonSize,
                  look: u,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: c,
                  onAction: f
              },
              'play'
          )
        : null;
}
