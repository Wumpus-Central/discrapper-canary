r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(655922),
    o = r(420660),
    s = r(475413),
    l = r(388032);
function u(e) {
    let { activity: n, onAction: r } = e,
        u = (0, a.Z)(n);
    return (0, o.Z)(n) && null != u
        ? (0, i.jsx)(s.tG, {
              text: l.intl.string(l.t['I6JG4+']),
              fullWidth: !0,
              onClick: (e) => (e.stopPropagation(), null == r || r({ action: 'PRESS_WATCH_BUTTON' }), window.open(u))
          })
        : null;
}
