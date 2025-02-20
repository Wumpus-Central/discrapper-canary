n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(246841),
    i = n(620662),
    a = n(503438),
    o = n(981631),
    s = n(139157);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: f } = e;
    return null != t && (0, i.Z)(t, o.xjy.PLAY) && (0, a.Z)(t)
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
                  onAction: f
              },
              'play'
          )
        : null;
}
