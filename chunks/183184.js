"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(827343),
    a = n(579872),
    o = n(48686),
    l = n(375708);
function u(e, t, u) {
    t && (0, o.t)()
        ? (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("39765"), n.e("59866")]).then(n.bind(n, 937489));
              return (t) => (0, i.jsx)(e, { ...t });
          })
        : t
          ? a.A.show({ title: l.intl.string(l.t.FJSZVM), body: l.intl.string(l.t.etJjgW) })
          : e
            ? a.A.show({ title: l.intl.string(l.t["+JQCa/"]), body: l.intl.string(l.t.hsNm7d) })
            : s.A.toggleSelfMute({ location: u });
}
