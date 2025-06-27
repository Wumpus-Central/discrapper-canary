n.d(t, { U: () => f }), n(539854), n(388685), n(290780);
var r = n(73800),
    i = n(512722),
    l = n.n(i),
    o = n(149765),
    a = n(442837),
    s = n(271383),
    c = n(485386),
    d = n(430824),
    u = n(496675),
    p = n(594174),
    m = n(700785),
    b = n(282923),
    g = n(981631);
function f(e) {
    let t = (0, a.e7)([d.Z], () => d.Z.getGuild(e));
    l()(null != t, 'guild must be present to be editing its integration settings');
    let n = (0, a.e7)([u.Z], () => u.Z.getHighestRole(t)),
        i = (0, a.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        f = (0, a.cj)([p.default], () => p.default.getUsers()),
        j = (0, a.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
        O = r.useMemo(() => {
            let e = [];
            for (let n of i) {
                let r = f[n.userId];
                if (null == r || r.bot) continue;
                let i =
                    r.id !== t.ownerId &&
                    !m.BT({
                        permission: g.Plq.ADMINISTRATOR,
                        user: r,
                        context: t
                    }) &&
                    u.Z.canManageUser(g.Plq.USE_APPLICATION_COMMANDS, r, t);
                e.push({
                    id: r.id,
                    canManage: i,
                    nick: n.nick,
                    username: r.username
                });
            }
            return e;
        }, [t, i, f]),
        y = (e) => {
            var t;
            return e.managed && (null == (t = e.tags) ? void 0 : t.bot_id) != null;
        },
        v = r.useMemo(() => {
            let r = [];
            for (let i of j) {
                if (y(i)) continue;
                let l = !o.e$(i.permissions, g.Plq.ADMINISTRATOR) && u.Z.isRoleHigher(t, n, i),
                    a = {
                        id: i.id,
                        name: i.name,
                        canManage: l
                    };
                i.id === e ? r.unshift(a) : r.push(a);
            }
            return r;
        }, [j, e, t, n]),
        [_, C] = r.useState(''),
        N = r.useMemo(() => {
            var t;
            let n = (t = _).startsWith('@') ? t.substr(1) : t,
                r = _.startsWith('@') ? v.filter((t) => t.id === e) : v;
            return {
                members: (0, b.B)(O, h, n),
                roles: (0, b.B)(r, x, n)
            };
        }, [e, O, _, v]);
    return {
        query: _,
        results: N,
        setQuery: C,
        unfilteredCount: N.members.length + N.roles.length
    };
}
function h(e) {
    let t = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && t.push(e.nick),
        {
            id: e.id,
            names: t
        }
    );
}
function x(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
