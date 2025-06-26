n.d(t, { Z: () => c }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(911969),
    o = n(388032),
    s = n(261773);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === a.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t['/qdhkp']),
        u = t === a.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
        [d, p] = i.useState(n ? '' : c);
    return (i.useEffect(() => {
        n ? p('') : t === a.ww.NEW ? p(o.intl.string(o.t.y2b7CA)) : t === a.ww.UPDATED && p(o.intl.string(o.t['/qdhkp']));
    }, [n, t]),
    t === a.ww.NONE)
        ? null
        : (0, l.jsx)(r.IGR, {
              className: u,
              disableColor: !0,
              text: (0, l.jsx)('span', { children: d })
          });
}
