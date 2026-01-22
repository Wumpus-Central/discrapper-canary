n.d(t, { t: () => g }), n(321073), n(896048), n(667532);
var i = n(64700),
    r = n(284009),
    l = n.n(r),
    a = n(311907),
    s = n(34457),
    o = n(696451),
    c = n(317525),
    d = n(71393),
    u = n(576705),
    b = n(287809),
    f = n(488926),
    p = n(633334),
    m = n(652215);
function g(e) {
    let t = (0, a.bG)([d.A], () => d.A.getGuild(e));
    l()(null != t, "guild must be present to be editing its integration settings");
    let n = (0, a.bG)([u.A], () => u.A.getHighestRole(t)),
        r = (0, a.yK)([o.Ay], () => o.Ay.getMembers(e), [e]),
        g = (0, a.cf)([b.default], () => b.default.getUsers()),
        j = (0, a.bG)([c.A], () => c.A.getSortedRoles(e), [e]),
        O = i.useMemo(() => {
            let e = [];
            for (let n of r) {
                let i = g[n.userId];
                if (null == i || i.bot) continue;
                let r =
                    i.id !== t.ownerId &&
                    !f.$3({
                        permission: m.xBc.ADMINISTRATOR,
                        user: i,
                        context: t,
                    }) &&
                    u.A.canManageUser(m.xBc.USE_APPLICATION_COMMANDS, i, t);
                e.push({
                    id: i.id,
                    canManage: r,
                    nick: n.nick,
                    username: i.username,
                });
            }
            return e;
        }, [t, r, g]),
        y = (e) => {
            var t;
            return e.managed && (null == (t = e.tags) ? void 0 : t.bot_id) != null;
        },
        A = i.useMemo(() => {
            let e = [];
            for (let i of j) {
                if (y(i)) continue;
                let r = !(0, s._m)(i, m.xBc.ADMINISTRATOR) && u.A.isRoleHigher(t, n, i),
                    l = {
                        id: i.id,
                        name: i.name,
                        canManage: r,
                    };
                (0, s.Oy)(i) ? e.unshift(l) : e.push(l);
            }
            return e;
        }, [j, t, n]),
        [v, N] = i.useState(""),
        E = i.useMemo(() => {
            var t;
            let n = (t = v).startsWith("@") ? t.substr(1) : t,
                i = v.startsWith("@") ? A.filter((t) => t.id === e) : A;
            return {
                members: (0, p.I)(O, h, n),
                roles: (0, p.I)(i, x, n),
            };
        }, [e, O, v, A]);
    return {
        query: v,
        results: E,
        setQuery: N,
        unfilteredCount: E.members.length + E.roles.length,
    };
}
function h(e) {
    let t = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && t.push(e.nick),
        {
            id: e.id,
            names: t,
        }
    );
}
function x(e) {
    return {
        id: e.id,
        names: [e.name],
    };
}
