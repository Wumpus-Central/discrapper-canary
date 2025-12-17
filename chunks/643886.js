n.d(t, { U: () => f }), n(539854), n(388685), n(290780);
var i = n(473749),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(345162),
    s = n(271383),
    c = n(485386),
    d = n(430824),
    u = n(496675),
    m = n(594174),
    b = n(700785),
    p = n(282923),
    g = n(981631);
function f(e) {
    let t = (0, a.e7)([d.Z], () => d.Z.getGuild(e));
    l()(null != t, "guild must be present to be editing its integration settings");
    let n = (0, a.e7)([u.Z], () => u.Z.getHighestRole(t)),
        r = (0, a.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        f = (0, a.cj)([m.default], () => m.default.getUsers()),
        j = (0, a.e7)([c.Z], () => c.Z.getSortedRoles(e), [e]),
        v = i.useMemo(() => {
            let e = [];
            for (let n of r) {
                let i = f[n.userId];
                if (null == i || i.bot) continue;
                let r =
                    i.id !== t.ownerId &&
                    !b.BT({
                        permission: g.Plq.ADMINISTRATOR,
                        user: i,
                        context: t,
                    }) &&
                    u.Z.canManageUser(g.Plq.USE_APPLICATION_COMMANDS, i, t);
                e.push({
                    id: i.id,
                    canManage: r,
                    nick: n.nick,
                    username: i.username,
                });
            }
            return e;
        }, [t, r, f]),
        O = (e) => {
            var t;
            return e.managed && (null == (t = e.tags) ? void 0 : t.bot_id) != null;
        },
        y = i.useMemo(() => {
            let e = [];
            for (let i of j) {
                if (O(i)) continue;
                let r = !(0, o.Fs)(i, g.Plq.ADMINISTRATOR) && u.Z.isRoleHigher(t, n, i),
                    l = {
                        id: i.id,
                        name: i.name,
                        canManage: r,
                    };
                (0, o.fI)(i) ? e.unshift(l) : e.push(l);
            }
            return e;
        }, [j, t, n]),
        [C, N] = i.useState(""),
        S = i.useMemo(() => {
            var t;
            let n = (t = C).startsWith("@") ? t.substr(1) : t,
                i = C.startsWith("@") ? y.filter((t) => t.id === e) : y;
            return {
                members: (0, p.B)(v, h, n),
                roles: (0, p.B)(i, x, n),
            };
        }, [e, v, C, y]);
    return {
        query: C,
        results: S,
        setQuery: N,
        unfilteredCount: S.members.length + S.roles.length,
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
