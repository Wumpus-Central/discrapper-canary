n.d(t, {
    A: () => o,
});
var r = n(627968),
    i = n(158954),
    l = n(793943),
    a = n(58736),
    s = n(985018);

function o(e) {
    let { className: t } = e,
        { activePanel: n } = (0, l.fy)(),
        o = n === l.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, r.jsx)(a.In, {
        className: t,
        onClick: () => {
            o ? (0, l.Jp)() : (0, l.nf)(l.HP.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: i.PXj,
        "aria-label": s.intl.string(s.t["9Isknj"]),
        tooltip: o ? null : s.intl.string(s.t["9Isknj"]),
        selected: o,
    });
}
