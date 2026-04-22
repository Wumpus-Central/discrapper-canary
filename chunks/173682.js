e.d(t, { A: () => c });
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(477782),
    r = e(686449),
    s = e(945886),
    d = e(985018);
function c(n) {
    let t = (0, l.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, i.jsx)(a.sL, {
              id: "hide-voice-names",
              label: d.intl.string(d.t.LxzNiu),
              action: () => r.A.update(n.id),
              checked: t,
          });
}
