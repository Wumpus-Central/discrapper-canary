n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(827343),
    r = n(579872),
    a = n(48686),
    u = n(985018);
function o(e, t, o) {
    t && (0, a.t)()
        ? (0, l.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("39765"), n.e("59866")]).then(n.bind(n, 937489));
              return (t) => (0, i.jsx)(e, { ...t });
          })
        : t
          ? r.A.show({ title: u.intl.string(u.t.FJSZVM), body: u.intl.string(u.t.etJjgW) })
          : e
            ? r.A.show({ title: u.intl.string(u.t["+JQCa/"]), body: u.intl.string(u.t.hsNm7d) })
            : s.A.toggleSelfMute({ location: o });
}
