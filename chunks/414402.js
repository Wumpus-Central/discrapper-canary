n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(620662),
    a = n(710845),
    s = n(475413),
    o = n(981631),
    l = n(388032);
function u(e) {
    let { user: t, activity: n, onAction: u } = e;
    return (0, r.Z)(n, o.xjy.INSTANCE)
        ? (0, i.jsx)(s.tG, {
              text: l.intl.string(l.t.vwl1PD),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(), null == u || u({ action: 'PRESS_NOTIFY_BUTTON' }), new a.Z('UserActivityActions').log('notify', t.id, n);
              }
          })
        : null;
}
