n.d(t, { A: () => l });
var i = n(311907),
    s = n(628965),
    r = n(152056),
    a = n(360619);
function l(e, t) {
    let n = (0, a.AC)(t),
        l = r.A.useField("query"),
        o = (0, i.bG)([s.A], () => s.A.getSubsection()),
        c = e.filter((e) => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = c.filter((e) => n.has(e.setting));
        c = e.length > 0 ? e : c;
    }
    if (null != l && l.length > 0 && null == o) {
        let e = c.find((e) => e.title.toLowerCase() === l.toLowerCase());
        if (null != e) return { viewableTabs: c, filteredTab: e };
    }
    let d = c.find((e) => null != e && e.setting === o);
    return { viewableTabs: c, filteredTab: d };
}
