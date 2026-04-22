e.d(n, { A: () => u });
var i = e(627968);
e(64700);
var l = e(908289),
    r = e(960076),
    a = e(939496),
    s = e(993401),
    o = e(996988),
    c = e(985018);
function u(t) {
    let { activity: n, onAction: e } = t,
        { themeType: u } = (0, a.E)(),
        d = u === o.d.MODAL_V2,
        A = (0, l.A)(n);
    return (0, r.A)(n) && null != A
        ? (0, i.jsx)(s.FD, {
              text: c.intl.string(c.t.I6JG46),
              fullWidth: !d,
              onClick: (t) => (t.stopPropagation(), e?.({ action: "PRESS_WATCH_BUTTON" }), window.open(A)),
          })
        : null;
}
