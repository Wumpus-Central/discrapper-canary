n.d(t, { U: () => g }), n(653041), n(47120), n(733860);
var r = n(192379),
    i = n(512722),
    l = n.n(i),
    o = n(149765),
    a = n(442837),
    s = n(271383),
    c = n(430824),
    d = n(496675),
    u = n(594174),
    p = n(700785),
    m = n(282923),
    b = n(981631);
function g(e) {
    let t = (0, a.e7)([c.Z], () => c.Z.getGuild(e));
    l()(null != t, 'guild must be present to be editing its integration settings');
    let n = (0, a.e7)([d.Z], () => d.Z.getHighestRole(t)),
        i = (0, a.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        g = (0, a.cj)([u.default], () => u.default.getUsers()),
        x = (0, a.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
        j = r.useMemo(() => {
            let e = [];
            for (let n of i) {
                let r = g[n.userId];
                if (null == r || r.bot) continue;
                let i =
                    r.id !== t.ownerId &&
                    !p.BT({
                        permission: b.Plq.ADMINISTRATOR,
                        user: r,
                        context: t
                    }) &&
                    d.Z.canManageUser(b.Plq.USE_APPLICATION_COMMANDS, r, t);
                e.push({
                    id: r.id,
                    canManage: i,
                    nick: n.nick,
                    username: r.username
                });
            }
            return e;
        }, [t, i, g]),
        N = (e) => {
            var t;
            return e.managed && (null == (t = e.tags) ? void 0 : t.bot_id) != null;
        },
        O = r.useMemo(() => {
            let r = [];
            for (let i of x) {
                if (N(i)) continue;
                let l = !o.e$(i.permissions, b.Plq.ADMINISTRATOR) && d.Z.isRoleHigher(t, n, i),
                    a = {
                        id: i.id,
                        name: i.name,
                        canManage: l
                    };
                i.id === e ? r.unshift(a) : r.push(a);
            }
            return r;
        }, [x, e, t, n]),
        [v, y] = r.useState(''),
        _ = r.useMemo(() => {
            var t;
            let n = (t = v).startsWith('@') ? t.substr(1) : t,
                r = v.startsWith('@') ? O.filter((t) => t.id === e) : O;
            return {
                members: (0, m.B)(j, f, n),
                roles: (0, m.B)(r, h, n)
            };
        }, [e, j, v, O]);
    return {
        query: v,
        results: _,
        setQuery: y,
        unfilteredCount: _.members.length + _.roles.length
    };
}
function f(e) {
    let t = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && t.push(e.nick),
        {
            id: e.id,
            names: t
        }
    );
}
function h(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
