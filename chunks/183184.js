"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(827343),
    s = n(579872),
    l = n(48686),
    o = n(375708);
function d(e, t, d) {
    t && (0, l.t)()
        ? (0, r.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("39765"), n.e("59866")]).then(n.bind(n, 937489));
              return (t) => (0, i.jsx)(e, { ...t });
          })
        : t
          ? s.A.show({ title: o.intl.string(o.t.FJSZVM), body: o.intl.string(o.t.etJjgW) })
          : e
            ? s.A.show({ title: o.intl.string(o.t["+JQCa/"]), body: o.intl.string(o.t.hsNm7d) })
            : a.A.toggleSelfMute({ location: d });
}
