r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(620662),
    o = r(710845),
    s = r(475413),
    l = r(981631),
    u = r(388032);
function c(e) {
    let { user: n, activity: r, onAction: c } = e;
    return (0, a.Z)(r, l.xjy.INSTANCE)
        ? (0, i.jsx)(s.tG, {
              text: u.intl.string(u.t.vwl1PD),
              fullWidth: !0,
              onClick: (e) => {
                  e.stopPropagation(), null == c || c({ action: 'PRESS_NOTIFY_BUTTON' }), new o.Z('UserActivityActions').log('notify', n.id, r);
              }
          })
        : null;
}
