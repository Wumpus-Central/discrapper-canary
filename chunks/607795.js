t.d(l, { A: () => n });
var r = t(627968),
    o = t(55391),
    i = t(785330);
let n = (e) => {
    let { templateId: l, tenantId: t, skeleton: n, requestParams: a, componentMap: c } = e,
        { layout: d, loading: s } = (0, o.A)(t, l, a);
    return s && null != n
        ? (0, r.jsx)(i.Ay, { overrides: c, layout: { id: "skeleton", children: n } })
        : null == d
          ? null
          : (0, r.jsx)(i.Ay, { layout: d, overrides: c });
};
