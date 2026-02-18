t.d(r, { A: () => o });
var d = t(627968),
    l = t(856535),
    c = t(785330);
let o = (e) => {
    let { layoutId: r, tenantId: t, skeleton: o, requestParams: a, componentMap: n } = e,
        { layout: s, loading: u } = (0, l.A)(r, t, a);
    return u && null != o
        ? (0, d.jsx)(c.Ay, { overrides: n, layout: { id: "skeleton", children: o } })
        : null == s
          ? null
          : (0, d.jsx)(c.Ay, { layout: s, overrides: n });
};
