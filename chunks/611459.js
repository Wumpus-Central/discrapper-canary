n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(246841),
    l = n(620662),
    a = n(503438),
    o = n(981631),
    s = n(7826);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: p } = e;
    return null != t && (0, l.Z)(t, o.xjy.PLAY) && (0, a.Z)(t)
        ? (0, r.jsx)(
              i.Z,
              {
                  className: s.button,
                  size: s.buttonSize,
                  look: u,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: c,
                  onAction: p,
              },
              "play",
          )
        : null;
}
