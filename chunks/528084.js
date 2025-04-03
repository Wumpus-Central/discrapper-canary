n.d(t, { a: () => l });
var r = n(442837),
    i = n(663389),
    s = n(996733),
    a = n(991346);
function l(e, t) {
    let n = (0, a.Gj)(t),
        l = (0, s.Z7)(),
        o = (0, r.e7)([i.Z], () => i.Z.getSubsection()),
        c = e.filter((e) => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = c.filter((e) => n.has(e.setting));
        c = e.length > 0 ? e : c;
    }
    if (null != l && l.length > 0 && null == o) {
        let e = c.find((e) => e.title.toLowerCase() === l.toLowerCase());
        if (null != e)
            return {
                viewableTabs: c,
                filteredTab: e
            };
    }
    let d = c.find((e) => null != e && e.setting === o);
    return {
        viewableTabs: c,
        filteredTab: d
    };
}
