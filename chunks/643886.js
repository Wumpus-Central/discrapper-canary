n.d(t, { U: () => p }), n(653041), n(47120), n(733860);
var i = n(192379),
    l = n(512722),
    a = n.n(l),
    r = n(149765),
    s = n(442837),
    o = n(271383),
    d = n(430824),
    c = n(496675),
    u = n(594174),
    m = n(700785),
    h = n(282923),
    x = n(981631);
function p(e) {
    let t = (0, s.e7)([d.Z], () => d.Z.getGuild(e));
    a()(null != t, 'guild must be present to be editing its integration settings');
    let n = (0, s.e7)([c.Z], () => c.Z.getHighestRole(t)),
        l = (0, s.Wu)([o.ZP], () => o.ZP.getMembers(e), [e]),
        p = (0, s.cj)([u.default], () => u.default.getUsers()),
        b = (0, s.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
        v = i.useMemo(() => {
            let e = [];
            for (let n of l) {
                let i = p[n.userId];
                if (null == i || i.bot) continue;
                let l =
                    i.id !== t.ownerId &&
                    !m.BT({
                        permission: x.Plq.ADMINISTRATOR,
                        user: i,
                        context: t
                    }) &&
                    c.Z.canManageUser(x.Plq.USE_APPLICATION_COMMANDS, i, t);
                e.push({
                    id: i.id,
                    canManage: l,
                    nick: n.nick,
                    username: i.username
                });
            }
            return e;
        }, [t, l, p]),
        _ = (e) => {
            var t;
            return e.managed && (null === (t = e.tags) || void 0 === t ? void 0 : t.bot_id) != null;
        },
        j = i.useMemo(() => {
            let i = [];
            for (let l of b) {
                if (_(l)) continue;
                let a = !r.e$(l.permissions, x.Plq.ADMINISTRATOR) && c.Z.isRoleHigher(t, n, l),
                    s = {
                        id: l.id,
                        name: l.name,
                        canManage: a
                    };
                l.id === e ? i.unshift(s) : i.push(s);
            }
            return i;
        }, [b, e, t, n]),
        [N, C] = i.useState(''),
        I = i.useMemo(() => {
            var t;
            let n = (t = N).startsWith('@') ? t.substr(1) : t,
                i = N.startsWith('@') ? j.filter((t) => t.id === e) : j;
            return {
                members: (0, h.B)(v, g, n),
                roles: (0, h.B)(i, f, n)
            };
        }, [e, v, N, j]);
    return {
        query: N,
        results: I,
        setQuery: C,
        unfilteredCount: I.members.length + I.roles.length
    };
}
function g(e) {
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
