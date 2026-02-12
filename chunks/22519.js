"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(856535),
    a = n(785330);
let s = (e) => {
    let { layoutId: t, tenantId: n, skeleton: s, componentMap: o } = e,
        { layout: l, loading: u } = (0, i.A)(t, n);
    return u && null != s
        ? (0, r.jsx)(a.Ay, { overrides: o, layout: { id: "skeleton", children: s } })
        : null == l
          ? null
          : (0, r.jsx)(a.Ay, { layout: l, overrides: o });
};
