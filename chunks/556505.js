n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(911969),
    a = n(388032),
    c = n(711642);
function u(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        u = t === o.ww.NEW ? a.NW.string(a.t.y2b7CA) : a.NW.string(a.t['/qdhkp']),
        d = t === o.ww.NEW ? c.activityNewBadge : c.activityUpdatedBadge,
        [s, p] = r.useState(n ? '' : u);
    return (r.useEffect(() => {
        n ? p('') : t === o.ww.NEW ? p(a.NW.string(a.t.y2b7CA)) : t === o.ww.UPDATED && p(a.NW.string(a.t['/qdhkp']));
    }, [n, t]),
    t === o.ww.NONE)
        ? null
        : (0, i.jsx)(l.IGR, {
              className: d,
              disableColor: !0,
              text: (0, i.jsx)('span', { children: s })
          });
}
