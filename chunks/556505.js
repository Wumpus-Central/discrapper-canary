n.d(t, { Z: () => c }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(911969),
    a = n(388032),
    s = n(261773);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === o.ww.NEW ? a.intl.string(a.t.y2b7CA) : a.intl.string(a.t['/qdhkp']),
        u = t === o.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
        [d, p] = r.useState(n ? '' : c);
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
