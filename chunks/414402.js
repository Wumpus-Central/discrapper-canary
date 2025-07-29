n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(620662),
    o = n(710845),
    s = n(652853),
    l = n(475413),
    c = n(228168),
    u = n(981631),
    d = n(388032);
function _(e) {
    let { user: t, activity: n, onAction: _ } = e,
        { themeType: f } = (0, s.z)();
    if (!(0, a.Z)(n, u.xjy.INSTANCE)) return null;
    let p = (e) => {
        (e.stopPropagation(), null == _ || _({ action: 'PRESS_NOTIFY_BUTTON' }), new o.Z('UserActivityActions').log('notify', t.id, n));
    };
    return f === c.lY.MODAL_V2
        ? (0, r.jsx)(l.tG, {
              text: d.intl.string(d.t.vwl1PD),
              size: i.Ph.TINY,
              themeColor: 'secondary',
              onClick: p
          })
        : (0, r.jsx)(l.tG, {
              text: d.intl.string(d.t.vwl1PD),
              size: i.Ph.SMALL,
              themeColor: 'secondary',
              fullWidth: !0,
              onClick: p
          });
}
