l.d(t, { A: () => s });
var r = l(627968),
    n = l(55391),
    a = l(785330);
let s = (e) => {
    let { templateId: t, tenantId: l, skeleton: s, requestParams: c, componentMap: i } = e,
        { layout: d, loading: o } = (0, n.A)(l, t, c);
    return o && null != s
        ? (0, r.jsx)(a.Ay, { overrides: i, layout: { id: "skeleton", children: s } })
        : null == d
          ? null
          : (0, r.jsx)(a.Ay, { layout: d, overrides: i });
};
