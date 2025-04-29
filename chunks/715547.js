n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(655922),
    o = n(420660),
    s = n(652853),
    l = n(475413),
    c = n(228168),
    u = n(388032);
function d(e) {
    let { activity: t, onAction: n } = e,
        { themeType: d } = (0, s.z)(),
        f = (0, a.Z)(t);
    if (!(0, o.Z)(t) || null == f) return null;
    let _ = (e) => (e.stopPropagation(), null == n || n({ action: 'PRESS_WATCH_BUTTON' }), window.open(f));
    return d === c.lY.MODAL_V2
        ? (0, r.jsx)(l.tG, {
              text: u.intl.string(u.t['I6JG4+']),
              size: i.PhG.TINY,
              themeColor: 'secondary',
              onClick: _
          })
        : (0, r.jsx)(l.tG, {
              text: u.intl.string(u.t['I6JG4+']),
              fullWidth: !0,
              onClick: _
          });
}
