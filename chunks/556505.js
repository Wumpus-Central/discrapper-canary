n.d(t, { Z: () => c }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(911969),
    a = n(388032),
    s = n(696118);
function c(e) {
    let { name: t, labelType: n, collapsed: c = !1, showTooltip: u = !1 } = e,
        d = n === o.ww.NEW ? a.NW.string(a.t.y2b7CA) : a.NW.string(a.t['/qdhkp']),
        p = n === o.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
        [h, f] = i.useState(c ? '' : d);
    if (
        (i.useEffect(() => {
            c ? f('') : n === o.ww.NEW ? f(a.NW.string(a.t.y2b7CA)) : n === o.ww.UPDATED && f(a.NW.string(a.t['/qdhkp']));
        }, [c, n]),
        n === o.ww.NONE)
    )
        return null;
    let m = (0, r.jsx)(l.IGR, {
        className: p,
        disableColor: !0,
        text: (0, r.jsx)('span', { children: h })
    });
    if (!u) return m;
    let g = a.NW.formatToPlainString(a.t.Vs2EeX, { activity: t });
    return (0, r.jsx)(l.DY3, {
        text: g,
        tooltipContentClassName: s.tooltip,
        children: m
    });
}
