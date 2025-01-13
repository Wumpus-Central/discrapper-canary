n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(710845),
    r = n(620662),
    a = n(915863),
    s = n(981631),
    o = n(388032);
function c(e) {
    let { activity: t, user: n, look: c, color: u, onAction: d } = e;
    return (0, r.Z)(t, s.xjy.INSTANCE)
        ? (0, i.jsx)(
              a.Z,
              {
                  look: c,
                  color: u,
                  onClick: () => {
                      null == d || d(), new l.Z('UserActivityActions').log('notify', n.id, t);
                  },
                  fullWidth: !0,
                  children: o.intl.string(o.t.vwl1PD)
              },
              'notify'
          )
        : null;
}
