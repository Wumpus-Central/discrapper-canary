n.d(t, { Z: () => g }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(692547),
    r = n(481060),
    s = n(706454),
    o = n(594174),
    c = n(626135),
    d = n(63063),
    u = n(51144),
    m = n(665149),
    _ = n(981631),
    h = n(388032);
let p = new Set(['ko', 'ja']);
function g(e) {
    let { className: t } = e,
        n = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        g = (0, l.e7)([s.default], () => s.default.locale),
        f = (0, u.EO)(n);
    return (0, i.jsx)(r.eee, {
        href: d.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(m.JO, {
            color: f ? a.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            className: t,
            onClick: () => c.default.track(_.rMx.HELP_CLICKED, { highlighted: f }),
            icon: r.idN,
            tooltipPosition: p.has(g) ? 'left' : void 0,
            tooltip: h.intl.string(h.t.cqEoj4)
        })
    });
}
