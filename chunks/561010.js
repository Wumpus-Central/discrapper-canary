n.d(t, { q: () => A }), n(321073);
var i = n(64700),
    l = n(311907),
    s = n(361610),
    a = n(964486),
    r = n(36124),
    o = n(317525),
    d = n(441446),
    c = n(818348),
    u = n(985018);
let h = [];
function A(e, t) {
    (0, a.Ay)(() => {
        t?.id != null && (0, s.Ey)(t.id, e, r.LD);
    });
    let n = (0, l.bG)([o.A], () => (null != t ? o.A.getSortedRoles(t.id) : [])),
        { version: A, members: g } = (0, l.cf)([d.A], () => ({
            version: d.A.getMemberListVersion(e),
            members: d.A.getMemberListSections(e),
        })),
        m = null == t,
        p = i.useMemo(() => {
            if (m) return h;
            let e = n.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
            return (
                e.push(
                    { id: c.cl.ONLINE, label: u.intl.string(u.t.WbGtnH) },
                    { id: c.cl.OFFLINE, label: u.intl.string(u.t.Vv0abJ) },
                ),
                e.map((e) => {
                    let { id: t, label: n } = e;
                    return { label: n, userIds: g?.[t]?.userIds ?? [], id: t, roleId: t };
                })
            );
        }, [n, g, A, m]);
    return null != g ? p : h;
}
