n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(481060),
    s = n(911969),
    c = n(388032),
    o = n(750628);
function r(e) {
    let { name: t, labelType: n, collapsed: r = !1, showTooltip: d = !1 } = e,
        u = n === s.ww.NEW ? c.intl.string(c.t.y2b7CA) : c.intl.string(c.t['/qdhkp']),
        p = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [f, m] = a.useState(r ? '' : u);
    if (
        (a.useEffect(() => {
            r ? m('') : n === s.ww.NEW ? m(c.intl.string(c.t.y2b7CA)) : n === s.ww.UPDATED && m(c.intl.string(c.t['/qdhkp']));
        }, [r, n]),
        n === s.ww.NONE)
    )
        return null;
    let g = (0, i.jsx)(l.TextBadge, {
        className: p,
        disableColor: !0,
        text: (0, i.jsx)('span', { children: f })
    });
    if (!d) return g;
    let v = c.intl.formatToPlainString(c.t.Vs2EeX, { activity: t });
    return (0, i.jsx)(l.TooltipContainer, {
        text: v,
        tooltipContentClassName: o.tooltip,
        children: g
    });
}
