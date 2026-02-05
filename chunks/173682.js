i.d(t, { A: () => c });
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(686449),
    s = i(945886),
    d = i(985018);
function c(n) {
    let t = (0, l.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, e.jsx)(r.sLh, {
              id: "hide-voice-names",
              label: d.intl.string(d.t.LxzNiu),
              action: () => a.A.update(n.id),
              checked: t,
          });
}
