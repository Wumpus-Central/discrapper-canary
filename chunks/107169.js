n.d(t, { Z: () => s });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(871499),
    r = n(388032);
function s(e) {
    let { popoutWindowAlwaysOnTop: t, onToggleStayOnTop: n, ...s } = e,
        o = t ? r.intl.string(r.t.YdyDMz) : r.intl.string(r.t.ZVGHwM),
        c = t ? l.QVc : l.k5M;
    return (0, i.jsx)(a.Z, {
        onClick: () => n(!t),
        label: o,
        iconComponent: c,
        ...s
    });
}
