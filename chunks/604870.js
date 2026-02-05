n.d(t, { t: () => p }), n(321073), n(667532);
var i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    r = n(34457),
    o = n(696451),
    d = n(317525),
    c = n(71393),
    u = n(576705),
    m = n(287809),
    g = n(488926),
    x = n(633334),
    h = n(652215);
function p(e) {
    let t = (0, a.bG)([c.A], () => c.A.getGuild(e));
    s()(null != t, "guild must be present to be editing its integration settings");
    let n = (0, a.bG)([u.A], () => u.A.getHighestRole(t)),
        l = (0, a.yK)([o.Ay], () => o.Ay.getMembers(e), [e]),
        p = (0, a.cf)([m.default], () => m.default.getUsers()),
        _ = (0, a.bG)([d.A], () => d.A.getSortedRoles(e), [e]),
        f = i.useMemo(() => {
            let e = [];
            for (let n of l) {
                let i = p[n.userId];
                if (null == i || i.bot) continue;
                let l =
                    i.id !== t.ownerId &&
                    !g.$3({ permission: h.xBc.ADMINISTRATOR, user: i, context: t }) &&
                    u.A.canManageUser(h.xBc.USE_APPLICATION_COMMANDS, i, t);
                e.push({ id: i.id, canManage: l, nick: n.nick, username: i.username });
            }
            return e;
        }, [t, l, p]),
        N = (e) => e.managed && e.tags?.bot_id != null,
        j = i.useMemo(() => {
            let e = [];
            for (let i of _) {
                if (N(i)) continue;
                let l = !(0, r._m)(i, h.xBc.ADMINISTRATOR) && u.A.isRoleHigher(t, n, i),
                    s = { id: i.id, name: i.name, canManage: l };
                (0, r.Oy)(i) ? e.unshift(s) : e.push(s);
            }
            return e;
        }, [_, t, n]),
        [T, C] = i.useState(""),
        v = i.useMemo(() => {
            var t;
            let n = (t = T).startsWith("@") ? t.substr(1) : t,
                i = T.startsWith("@") ? j.filter((t) => t.id === e) : j;
            return { members: (0, x.I)(f, A, n), roles: (0, x.I)(i, b, n) };
        }, [e, f, T, j]);
    return { query: T, results: v, setQuery: C, unfilteredCount: v.members.length + v.roles.length };
}
function A(e) {
    let t = [e.username];
    return e?.nick != null && t.push(e.nick), { id: e.id, names: t };
}
function b(e) {
    return { id: e.id, names: [e.name] };
}
