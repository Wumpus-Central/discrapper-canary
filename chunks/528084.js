n.d(t, {
    a: function () {
        return o;
    }
});
var i = n(442837),
    s = n(663389),
    r = n(996733),
    a = n(991346),
    l = n(295545);
function o(e, t) {
    let n = (0, l.eA)({ location: 'settingsTabs' }),
        o = (0, a.Gj)(t),
        c = (0, r.Z7)(),
        d = (0, i.e7)([s.Z], () => s.Z.getSubsection()),
        u = e.filter((e) => null == e.predicate || e.predicate());
    if (n) {
        if (null != o && o.size > 0) {
            let e = u.filter((e) => o.has(e.setting));
            u = e.length > 0 ? e : u;
        }
        if (null != c && c.length > 0 && null == d) {
            let e = u.find((e) => e.title.toLowerCase() === c.toLowerCase());
            if (null != e)
                return {
                    viewableTabs: u,
                    filteredTab: e
                };
        }
    }
    let m = u.find((e) => null != e && e.setting === d);
    return {
        viewableTabs: u,
        filteredTab: m
    };
}
