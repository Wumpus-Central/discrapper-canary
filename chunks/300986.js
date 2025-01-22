n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(706454),
    s = n(594174),
    c = n(626135),
    u = n(63063),
    d = n(51144),
    m = n(665149),
    h = n(981631),
    f = n(388032);
let p = new Set(['ko', 'ja']);
function _(e) {
    let { className: t } = e,
        n = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
        _ = (0, r.e7)([o.default], () => o.default.locale),
        g = (0, d.EO)(n);
    return (0, i.jsx)(a.Anchor, {
        href: u.w,
        target: '_blank',
        tabIndex: -1,
        children: (0, i.jsx)(m.JO, {
            color: g ? l.Z.unsafe_rawColors.GREEN_360.css : 'currentColor',
            className: t,
            onClick: () => c.default.track(h.rMx.HELP_CLICKED, { highlighted: g }),
            icon: a.CircleQuestionIcon,
            tooltipPosition: p.has(_) ? 'left' : void 0,
            tooltip: f.intl.string(f.t.cqEoj4)
        })
    });
}
