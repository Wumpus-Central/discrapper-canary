n.d(t, { a: () => a });
var i = n(442837),
    r = n(663389),
    s = n(996733),
    l = n(991346);
function a(e, t) {
    let n = (0, l.Gj)(t),
        a = (0, s.Z7)(),
        o = (0, i.e7)([r.Z], () => r.Z.getSubsection()),
        c = e.filter((e) => null == e.predicate || e.predicate());
    if (null != n && n.size > 0) {
        let e = c.filter((e) => n.has(e.setting));
        c = e.length > 0 ? e : c;
    }
    if (null != a && a.length > 0 && null == o) {
        let e = c.find((e) => e.title.toLowerCase() === a.toLowerCase());
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
