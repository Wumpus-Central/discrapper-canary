l.d(t, { A: () => s });
var r = l(627968),
    n = l(856535),
    a = l(785330);
let s = (e) => {
    let { layoutId: t, tenantId: l, skeleton: s, componentMap: c } = e,
        { layout: i, loading: d } = (0, n.A)(l, t);
    return d && null != s
        ? (0, r.jsx)(a.Ay, { overrides: c, layout: { id: "skeleton", children: s } })
        : null == i
          ? null
          : (0, r.jsx)(a.Ay, { layout: i, overrides: c });
};
