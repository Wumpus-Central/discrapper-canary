n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(908289),
    a = n(960076),
    s = n(939496),
    o = n(993401),
    l = n(996988),
    c = n(985018);
function u(e) {
    let { activity: t, onAction: n } = e,
        { themeType: u } = (0, s.E)(),
        d = u === l.d.MODAL_V2,
        f = (0, i.A)(t);
    if (!(0, a.A)(t) || null == f) return null;
    let p = (e) => (e.stopPropagation(), null == n || n({ action: "PRESS_WATCH_BUTTON" }), window.open(f));
    return (0, r.jsx)(o.FD, {
        text: c.intl.string(c.t.I6JG46),
        fullWidth: !d,
        onClick: p,
    });
}
