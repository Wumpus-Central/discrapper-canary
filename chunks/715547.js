n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(655922),
    o = n(420660),
    a = n(475413),
    s = n(388032);
function l(e) {
    let { activity: t, onAction: n } = e,
        l = (0, i.Z)(t);
    return (0, o.Z)(t) && null != l
        ? (0, r.jsx)(a.tG, {
              text: s.NW.string(s.t['I6JG4+']),
              fullWidth: !0,
              onClick: (e) => (e.stopPropagation(), null == n || n({ action: 'PRESS_WATCH_BUTTON' }), window.open(l))
          })
        : null;
}
