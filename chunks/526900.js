n.d(t, { A: () => o });
var i = n(627968),
    r = n(158954),
    a = n(793943),
    l = n(58736),
    s = n(985018);
function o(e) {
    let { className: t } = e,
        { activePanel: n } = (0, a.fy)(),
        o = n === a.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(l.In, {
        className: t,
        onClick: () => {
            o ? (0, a.Jp)() : (0, a.nf)(a.HP.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: r.PXj,
        "aria-label": s.intl.string(s.t["9Isknj"]),
        tooltip: o ? null : s.intl.string(s.t["9Isknj"]),
        selected: o,
    });
}
