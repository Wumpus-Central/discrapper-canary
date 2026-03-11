n.d(t, { A: () => o });
var i = n(627968),
    r = n(158954),
    l = n(793943),
    a = n(189252),
    s = n(985018);
function o() {
    let { activePanel: e } = (0, l.fy)(),
        t = e === l.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(a.A, {
        onClick: () => {
            t ? (0, l.Jp)() : (0, l.nf)(l.HP.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: r.PXj,
        tooltip: s.intl.string(s.t["9Isknj"]),
        selected: t,
    });
}
