n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(911969),
    s = n(388032),
    l = n(542445);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === a.ww.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkp"]),
        u = t === a.ww.NEW ? l.activityNewBadge : l.activityUpdatedBadge,
        [d, f] = i.useState(n ? "" : c);
    return (i.useEffect(() => {
        n
            ? f("")
            : t === a.ww.NEW
              ? f(s.intl.string(s.t.y2b7CA))
              : t === a.ww.UPDATED && f(s.intl.string(s.t["/qdhkp"]));
    }, [n, t]),
    t === a.ww.NONE)
        ? null
        : (0, r.jsx)(o.IGR, {
              className: u,
              disableColor: !0,
              text: (0, r.jsx)("span", { children: d }),
          });
}
