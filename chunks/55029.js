n.d(t, {
    A: () => o,
});
var r = n(311907),
    i = n(628965),
    a = n(152056),
    s = n(360619);

function o(e, t) {
    let n = (0, s.AC)(t),
        o = a.A.useField("query"),
        l = (0, r.bG)([i.A], () => i.A.getSubsection()),
        c = e.filter((e) => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = c.filter((e) => n.has(e.setting));
        c = e.length > 0 ? e : c;
    }
    if (null != o && o.length > 0 && null == l) {
        let e = c.find((e) => e.title.toLowerCase() === o.toLowerCase());
        if (null != e)
            return {
                viewableTabs: c,
                filteredTab: e,
            };
    }
    let u = c.find((e) => null != e && e.setting === l);
    return {
        viewableTabs: c,
        filteredTab: u,
    };
}
