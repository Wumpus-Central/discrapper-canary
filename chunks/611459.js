n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(246841),
    i = n(620662),
    o = n(503438),
    a = n(981631),
    s = n(145131);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: p } = e;
    return null != t && (0, i.Z)(t, a.xjy.PLAY) && (0, o.Z)(t)
        ? (0, r.jsx)(
              l.Z,
              {
                  className: s.button,
                  size: s.buttonSize,
                  look: u,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: c,
                  onAction: p
              },
              'play'
          )
        : null;
}
