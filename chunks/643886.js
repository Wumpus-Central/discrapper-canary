n.d(t, {
    U: function () {
        return g;
    }
}),
    n(653041),
    n(47120),
    n(733860);
var i = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(149765),
    o = n(442837),
    s = n(271383),
    d = n(430824),
    c = n(496675),
    u = n(594174),
    m = n(700785),
    h = n(282923),
    p = n(981631);
function g(e) {
    let t = (0, o.e7)([d.Z], () => d.Z.getGuild(e));
    r()(null != t, 'guild must be present to be editing its integration settings');
    let n = (0, o.e7)([c.Z], () => c.Z.getHighestRole(t)),
        l = (0, o.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        g = (0, o.cj)([u.default], () => u.default.getUsers()),
        v = (0, o.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
        b = i.useMemo(() => {
            let e = [];
            for (let n of l) {
                let i = g[n.userId];
                if (null == i || i.bot) continue;
                let l =
                    i.id !== t.ownerId &&
                    !m.BT({
                        permission: p.Plq.ADMINISTRATOR,
                        user: i,
                        context: t
                    }) &&
                    c.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, i, t);
                e.push({
                    id: i.id,
                    canManage: l,
                    nick: n.nick,
                    username: i.username
                });
            }
            return e;
        }, [t, l, g]),
        C = (e) => {
            var t;
            return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null;
        },
        I = i.useMemo(() => {
            let i = [];
            for (let l of v) {
                if (C(l)) continue;
                let r = !a.e$(l.permissions, p.Plq.ADMINISTRATOR) && c.Z.isRoleHigher(t, n, l),
                    o = {
                        id: l.id,
                        name: l.name,
                        canManage: r
                    };
                l.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
        }, [v, e, t, n]),
        [N, j] = i.useState(''),
        T = i.useMemo(() => {
            let t = (function (e) {
                    return e.startsWith('@') ? e.substr(1) : e;
                })(N),
                n = N.startsWith('@') ? I.filter((t) => t.id === e) : I,
                i = (0, h.B)(b, x, t);
            return {
                members: i,
                roles: (0, h.B)(n, f, t)
            };
        }, [e, b, N, I]);
    return {
        query: N,
        results: T,
        setQuery: j,
        unfilteredCount: T.members.length + T.roles.length
    };
}
function x(e) {
    let t = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && t.push(e.nick),
        {
            id: e.id,
            names: t
        }
    );
}
function f(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
