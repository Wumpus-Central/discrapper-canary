n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(246841),
    a = n(620662),
    r = n(503438),
    s = n(981631),
    o = n(472113);
function c(e) {
    let { activity: t, user: n, source: c, look: u, color: d, onAction: m } = e;
    return null != t && (0, a.Z)(t, s.xjy.PLAY) && (0, r.Z)(t)
        ? (0, i.jsx)(
              l.Z,
              {
                  className: o.button,
                  size: o.buttonSize,
                  look: u,
                  color: d,
                  fullWidth: !0,
                  activity: t,
                  user: n,
                  source: c,
                  onAction: m
              },
              'play'
          )
        : null;
}
