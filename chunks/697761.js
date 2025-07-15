n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(710845),
    l = n(620662),
    a = n(915863),
    o = n(981631),
    s = n(388032);
function c(e) {
    let { activity: t, user: n, look: c, color: u, onAction: d } = e;
    return (0, l.Z)(t, o.xjy.INSTANCE)
        ? (0, r.jsx)(
              a.Z,
              {
                  look: c,
                  color: u,
                  onClick: () => {
                      (null == d || d(), new i.Z('UserActivityActions').log('notify', n.id, t));
                  },
                  fullWidth: !0,
                  children: s.intl.string(s.t.vwl1PD)
              },
              'notify'
          )
        : null;
}
