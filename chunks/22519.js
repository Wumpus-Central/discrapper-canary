t.d(l, { A: () => n });
var r = t(627968),
    o = t(856535),
    i = t(785330);
let n = (e) => {
    let { layoutId: l, tenantId: t, skeleton: n, componentMap: a } = e,
        { layout: c, loading: d } = (0, o.A)(t, l);
    return d && null != n
        ? (0, r.jsx)(i.Ay, { overrides: a, layout: { id: "skeleton", children: n } })
        : null == c
          ? null
          : (0, r.jsx)(i.Ay, { layout: c, overrides: a });
};
