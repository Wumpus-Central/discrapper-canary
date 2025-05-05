n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(620662),
    a = n(710845),
    o = n(652853),
    s = n(475413),
    l = n(228168),
    c = n(981631),
    u = n(388032);
function d(e) {
    let { user: t, activity: n, onAction: d } = e,
        { themeType: f } = (0, o.z)();
    if (!(0, i.Z)(n, c.xjy.INSTANCE)) return null;
    let _ = (e) => {
        e.stopPropagation(), null == d || d({ action: 'PRESS_NOTIFY_BUTTON' }), new a.Z('UserActivityActions').log('notify', t.id, n);
    };
    return f === l.lY.MODAL_V2
        ? (0, r.jsx)(s.tG, {
              text: u.intl.string(u.t.vwl1PD),
              size: 'tiny',
              themeColor: 'secondary',
              onClick: _
          })
        : (0, r.jsx)(s.tG, {
              text: u.intl.string(u.t.vwl1PD),
              fullWidth: !0,
              onClick: _
          });
}
