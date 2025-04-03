n.d(t, { Z: () => s }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(911969),
    o = n(388032),
    c = n(261773);
function s(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        s = t === a.ww.NEW ? o.NW.string(o.t.y2b7CA) : o.NW.string(o.t['/qdhkp']),
        u = t === a.ww.NEW ? c.activityNewBadge : c.activityUpdatedBadge,
        [d, p] = r.useState(n ? '' : s);
    return (r.useEffect(() => {
        n ? p('') : t === a.ww.NEW ? p(o.NW.string(o.t.y2b7CA)) : t === a.ww.UPDATED && p(o.NW.string(o.t['/qdhkp']));
    }, [n, t]),
    t === a.ww.NONE)
        ? null
        : (0, i.jsx)(l.IGR, {
              className: u,
              disableColor: !0,
              text: (0, i.jsx)('span', { children: d })
          });
}
