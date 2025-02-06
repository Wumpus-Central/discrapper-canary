n.d(t, { Z: () => r }), n(47120);
var a = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(911969),
    c = n(388032),
    o = n(750628);
function r(e) {
    let { name: t, labelType: n, collapsed: r = !1, showTooltip: d = !1 } = e,
        u = n === s.ww.NEW ? c.intl.string(c.t.y2b7CA) : c.intl.string(c.t['/qdhkp']),
        p = n === s.ww.NEW ? o.activityNewBadge : o.activityUpdatedBadge,
        [m, g] = i.useState(r ? '' : u);
    if (
        (i.useEffect(() => {
            r ? g('') : n === s.ww.NEW ? g(c.intl.string(c.t.y2b7CA)) : n === s.ww.UPDATED && g(c.intl.string(c.t['/qdhkp']));
        }, [r, n]),
        n === s.ww.NONE)
    )
        return null;
    let f = (0, a.jsx)(l.IGR, {
        className: p,
        disableColor: !0,
        text: (0, a.jsx)('span', { children: m })
    });
    if (!d) return f;
    let v = c.intl.formatToPlainString(c.t.Vs2EeX, { activity: t });
    return (0, a.jsx)(l.DY3, {
        text: v,
        tooltipContentClassName: o.tooltip,
        children: f
    });
}
