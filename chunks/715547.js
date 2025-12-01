n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(655922),
    a = n(420660),
    o = n(652853),
    s = n(732380),
    l = n(671955),
    c = n(388032);
function u(e) {
    let { activity: t, onAction: n } = e,
        { themeType: u } = (0, o.z)(),
        d = u === l.l.MODAL_V2,
        f = (0, i.Z)(t);
    if (!(0, a.Z)(t) || null == f) return null;
    let p = (e) => (e.stopPropagation(), null == n || n({ action: "PRESS_WATCH_BUTTON" }), window.open(f));
    return (0, r.jsx)(s.O1, {
        text: c.intl.string(c.t.I6JG46),
        fullWidth: !d,
        onClick: p,
    });
}
