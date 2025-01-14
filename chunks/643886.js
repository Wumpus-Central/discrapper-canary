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
    c = n(430824),
    d = n(496675),
    u = n(594174),
    m = n(700785),
    h = n(282923),
    p = n(981631);
function g(e) {
    let t = (0, o.e7)([c.Z], () => c.Z.getGuild(e));
    r()(null != t, 'guild must be present to be editing its integration settings');
    let n = (0, o.e7)([d.Z], () => d.Z.getHighestRole(t)),
        l = (0, o.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        g = (0, o.cj)([u.default], () => u.default.getUsers()),
        b = (0, o.Wu)([c.Z], () => Object.values(c.Z.getRoles(e)), [e]),
        v = i.useMemo(() => {
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
                    d.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, i, t);
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
            for (let l of b) {
                if (C(l)) continue;
                let r = !a.e$(l.permissions, p.Plq.ADMINISTRATOR) && d.Z.isRoleHigher(t, n, l),
                    o = {
                        id: l.id,
                        name: l.name,
                        canManage: r
                    };
                l.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
        }, [b, e, t, n]),
        [N, j] = i.useState(''),
        _ = i.useMemo(() => {
            let t = (function (e) {
                    return e.startsWith('@') ? e.substr(1) : e;
                })(N),
                n = N.startsWith('@') ? I.filter((t) => t.id === e) : I,
                i = (0, h.B)(v, x, t);
            return {
                members: i,
                roles: (0, h.B)(n, f, t)
            };
        }, [e, v, N, I]);
    return {
        query: N,
        results: _,
        setQuery: j,
        unfilteredCount: _.members.length + _.roles.length
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
