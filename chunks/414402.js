n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(620662),
    a = n(710845),
    o = n(475413),
    s = n(981631),
    l = n(388032);
function c(e) {
    let { user: t, activity: n, onAction: c } = e;
    return (0, i.Z)(n, s.xjy.INSTANCE)
        ? (0, r.jsx)(o.tG, {
              text: l.NW.string(l.t.vwl1PD),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(), null == c || c({ action: 'PRESS_NOTIFY_BUTTON' }), new a.Z('UserActivityActions').log('notify', t.id, n);
              }
          })
        : null;
}
