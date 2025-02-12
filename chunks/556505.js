n.d(t, { Z: () => c }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(911969),
    s = n(388032),
    o = n(519722);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: d = !1 } = e,
        u = n === r.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t['/qdhkp']),
        h = n === r.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [p, m] = l.useState(c ? '' : u);
    if (
        (l.useEffect(() => {
            c ? m('') : n === r.ww.NEW ? m(s.intl.string(s.t.y2b7CA)) : n === r.ww.UPDATED && m(s.intl.string(s.t['/qdhkp']));
        }, [c, n]),
        n === r.ww.NONE)
    )
        return null;
    let f = (0, i.jsx)(a.IGR, {
        className: h,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: p })
    });
    if (!d) return f;
    let g = s.intl.formatToPlainString(s.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(a.DY3, {
        text: g,
        tooltipContentClassName: o.tooltip,
        children: f
    });
}
