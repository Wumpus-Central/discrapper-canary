n.d(t, { Z: () => m }), n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    p = n(665149),
    h = n(981631),
    f = n(388032);
let g = new Set(['ko', 'ja']);
function m(e) {
    let { className: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        m = (0, i.e7)([o.default], () => o.default.locale),
        b = (0, d.EO)(n);
    return (0, r.jsx)(a.eee, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, r.jsx)(p.JO, {
            color: b ? l.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            className: t,
            onClick: () => c.default.track(h.rMx.HELP_CLICKED, { highlighted: b }),
            icon: a.idN,
            tooltipPosition: g.has(m) ? 'left' : void 0,
            tooltip: f.intl.string(f.t.cqEoj4)
        })
    });
}
