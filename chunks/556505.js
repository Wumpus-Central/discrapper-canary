n.d(t, { Z: () => c }), n(388685);
var i = n(951288),
    l = n(647438),
    r = n(481060),
    a = n(911969),
    o = n(388032),
    s = n(542445);
function c(e) {
    let { labelType: t, collapsed: n = !1 } = e,
        c = t === a.ww.NEW ? o.intl.string(o.t.y2b7CA) : o.intl.string(o.t["/qdhkp"]),
        u = t === a.ww.NEW ? s.activityNewBadge : s.activityUpdatedBadge,
        [d, p] = l.useState(n ? "" : c);
    return (l.useEffect(() => {
        n
            ? p("")
            : t === a.ww.NEW
              ? p(o.intl.string(o.t.y2b7CA))
              : t === a.ww.UPDATED && p(o.intl.string(o.t["/qdhkp"]));
    }, [n, t]),
    t === a.ww.NONE)
        ? null
        : (0, i.jsx)(r.IGR, {
              className: u,
              disableColor: !0,
              text: (0, i.jsx)("span", { children: d }),
          });
}
