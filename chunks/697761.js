n.d(t, { Z: () => u });
var l = n(200651);
n(192379);
var i = n(710845),
    r = n(620662),
    a = n(915863),
    s = n(981631),
    o = n(388032);
function u(e) {
    let { activity: t, user: n, look: u, color: c, onAction: d } = e;
    return (0, r.Z)(t, s.xjy.INSTANCE)
        ? (0, l.jsx)(
              a.Z,
              {
                  look: u,
                  color: c,
                  onClick: () => {
                      null == d || d(), new i.Z('UserActivityActions').log('notify', n.id, t);
                  },
                  fullWidth: !0,
                  children: o.intl.string(o.t.vwl1PD)
              },
              'notify'
          )
        : null;
}
