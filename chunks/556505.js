n.d(t, { Z: () => s }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(911969),
    a = n(388032),
    c = n(261773);
function s(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        s = t === o.ww.NEW ? a.intl.string(a.t.y2b7CA) : a.intl.string(a.t['/qdhkp']),
        u = t === o.ww.NEW ? c.activityNewBadge : c.activityUpdatedBadge,
        [d, p] = r.useState(n ? '' : s);
    return (r.useEffect(() => {
        n ? p('') : t === o.ww.NEW ? p(a.intl.string(a.t.y2b7CA)) : t === o.ww.UPDATED && p(a.intl.string(a.t['/qdhkp']));
    }, [n, t]),
    t === o.ww.NONE)
        ? null
        : (0, i.jsx)(l.IGR, {
              className: u,
              disableColor: !0,
              text: (0, i.jsx)('span', { children: d })
          });
}
