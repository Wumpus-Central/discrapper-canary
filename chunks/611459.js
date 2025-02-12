n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(246841),
    r = n(620662),
    a = n(503438),
    s = n(981631),
    o = n(514190);
function u(e) {
    let { activity: t, user: n, source: u, look: c, color: d, onAction: m } = e;
    return null != t && (0, r.Z)(t, s.xjy.PLAY) && (0, a.Z)(t)
        ? (0, l.jsx)(
              i.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: c,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: u,
                  onAction: m
              },
              'play'
          )
        : null;
}
