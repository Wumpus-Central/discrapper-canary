"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(856535),
    a = n(785330);
let s = (e) => {
    let { layoutId: t, tenantId: n, skeleton: s, requestParams: o, componentMap: l } = e,
        { layout: u, loading: c } = (0, i.A)(t, n, o);
    return c && null != s
        ? (0, r.jsx)(a.Ay, { overrides: l, layout: { id: "skeleton", children: s } })
        : null == u
          ? null
          : (0, r.jsx)(a.Ay, { layout: u, overrides: l });
};
