e.d(t, {
    A: () => o,
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(686449),
    s = e(945886),
    c = e(985018);

function o(n) {
    let t = (0, l.bG)([s.A], () => s.A.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, i.jsx)(r.sLh, {
              id: "hide-voice-names",
              label: c.intl.string(c.t.LxzNiu),
              action: () => a.A.update(n.id),
              checked: t,
          });
}
