n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(911969),
    s = n(388032),
    o = n(750628);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: d = !1 } = e,
        u = n === a.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t['/qdhkp']),
        h = n === a.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [p, m] = l.useState(c ? '' : u);
    if (
        (l.useEffect(() => {
            c ? m('') : n === a.ww.NEW ? m(s.intl.string(s.t.y2b7CA)) : n === a.ww.UPDATED && m(s.intl.string(s.t['/qdhkp']));
        }, [c, n]),
        n === a.ww.NONE)
    )
        return null;
    let f = (0, i.jsx)(r.TextBadge, {
        className: h,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: p })
    });
    if (!d) return f;
    let g = s.intl.formatToPlainString(s.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(r.TooltipContainer, {
        text: g,
        tooltipContentClassName: o.tooltip,
        children: f
    });
}
