"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(908289),
    a = n(960076),
    s = n(939496),
    o = n(993401),
    l = n(996988),
    u = n(985018);
function c(e) {
    let { activity: t, onAction: n } = e,
        { themeType: c } = (0, s.E)(),
        d = c === l.d.MODAL_V2,
        _ = (0, i.A)(t);
    if (!(0, a.A)(t) || null == _) return null;
    let f = (e) => (e.stopPropagation(), n?.({ action: "PRESS_WATCH_BUTTON" }), window.open(_));
    return (0, r.jsx)(o.FD, { text: u.intl.string(u.t.I6JG46), fullWidth: !d, onClick: f });
}
