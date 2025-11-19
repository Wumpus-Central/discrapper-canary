n.d(t, { Z: () => c }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(911969),
    s = n(388032),
    l = n(334955);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === o.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkk"]),
        u = t === o.ww.NEW ? l.activityNewBadge : l.activityUpdatedBadge,
        [d, f] = i.useState(n ? "" : c);
    return (i.useEffect(() => {
        n
            ? f("")
            : t === o.ww.NEW
              ? f(s.intl.string(s.t.y2b7CA))
              : t === o.ww.UPDATED && f(s.intl.string(s.t["/qdhkk"]));
    }, [n, t]),
    t === o.ww.NONE)
        ? null
        : (0, r.jsx)(a.IGR, {
              className: u,
              disableColor: !0,
              text: (0, r.jsx)("span", { children: d }),
          });
}
