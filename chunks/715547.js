n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(655922),
    o = n(420660),
    s = n(652853),
    l = n(475413),
    c = n(228168),
    u = n(388032);
function d(e) {
    let { activity: t, onAction: n } = e,
        { themeType: d } = (0, s.z)(),
        _ = (0, a.Z)(t);
    if (!(0, o.Z)(t) || null == _) return null;
    let f = (e) => (e.stopPropagation(), null == n || n({ action: 'PRESS_WATCH_BUTTON' }), window.open(_));
    return d === c.lY.MODAL_V2
        ? (0, r.jsx)(l.tG, {
              text: u.intl.string(u.t['I6JG4+']),
              size: i.Ph.TINY,
              themeColor: 'secondary',
              onClick: f
          })
        : (0, r.jsx)(l.tG, {
              text: u.intl.string(u.t['I6JG4+']),
              size: i.Ph.SMALL,
              fullWidth: !0,
              themeColor: 'secondary',
              onClick: f
          });
}
