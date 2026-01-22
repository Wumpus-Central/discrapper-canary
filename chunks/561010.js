n.d(t, { q: () => p }), n(321073);
var r = n(64700),
    l = n(311907),
    i = n(361610),
    a = n(964486),
    s = n(36124),
    o = n(317525),
    c = n(219065),
    u = n(818348),
    d = n(985018);
let f = [];
function p(e, t) {
    (0, a.Ay)(() => {
        (null == t ? void 0 : t.id) != null && (0, i.Ey)(t.id, e, s.LD);
    });
    let n = (0, l.bG)([o.A], () => (null != t ? o.A.getSortedRoles(t.id) : [])),
        { version: p, members: h } = (0, l.cf)([c.A], () => ({
            version: c.A.getMemberListVersion(e),
            members: c.A.getMemberListSections(e),
        })),
        b = null == t,
        g = r.useMemo(() => {
            if (b) return f;
            let e = n
                .filter((e) => e.hoist)
                .map((e) => ({
                    id: e.id,
                    label: e.name,
                }));
            return (
                e.push(
                    {
                        id: u.cl.ONLINE,
                        label: d.intl.string(d.t.WbGtnH),
                    },
                    {
                        id: u.cl.OFFLINE,
                        label: d.intl.string(d.t.Vv0abJ),
                    },
                ),
                e.map((e) => {
                    var t, n;
                    let { id: r, label: l } = e;
                    return {
                        label: l,
                        userIds: null != (t = null == h || null == (n = h[r]) ? void 0 : n.userIds) ? t : [],
                        id: r,
                        roleId: r,
                    };
                })
            );
        }, [n, h, p, b]);
    return null != h ? g : f;
}
