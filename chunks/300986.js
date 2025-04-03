n.d(t, { Z: () => g }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    p = n(665149),
    m = n(981631),
    f = n(388032);
let h = new Set(['ko', 'ja']);
function g(e) {
    let { className: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        g = (0, i.e7)([o.default], () => o.default.locale),
        _ = (0, d.EO)(n);
    return (0, r.jsx)(l.eee, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, r.jsx)(p.JO, {
            color: _ ? a.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            className: t,
            onClick: () => c.default.track(m.rMx.HELP_CLICKED, { highlighted: _ }),
            icon: l.idN,
            tooltipPosition: h.has(g) ? 'left' : void 0,
            tooltip: f.NW.string(f.t.cqEoj4)
        })
    });
}
