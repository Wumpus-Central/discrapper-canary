n.d(t, { Ay: () => k, HB: () => y, oR: () => S });
var i = n(582128),
    l = n(778858),
    s = n(392054),
    a = n(200662);
(n(321073), n(667532));
var r = n(168186),
    o = n(47167),
    c = n(808728),
    d = n(576705),
    u = n(994500),
    m = n(287809),
    g = n(633334),
    h = n(652215),
    x = n(792996);
function A(e) {
    return { id: e.id, names: [e.name] };
}
var p = n(284009),
    b = n.n(p),
    f = n(855986),
    j = n(34457),
    N = n(696451),
    C = n(317525),
    v = n(71393),
    E = n(488926);
function I(e) {
    let t = [e.username];
    return (e?.nick != null && t.push(e.nick), { id: e.id, names: t });
}
function T(e) {
    return { id: e.id, names: [e.name] };
}
function y(e) {
    let t = (function (e) {
        let t = i.useMemo(() => {
                let t = c.A.getChannels(e),
                    n = [...t[c.I]];
                n.push(...t.VOCAL.filter((e) => e.channel.isGuildVocal()));
                let i = n.map((e) => ({
                    id: e.channel.id,
                    name: (0, o.m1)(e.channel, m.default, u.A),
                    canManage: d.A.can(h.xBc.MANAGE_ROLES, e.channel),
                }));
                return (i.unshift({ id: (0, r.Ap)(e), name: x.intl.string(x.t["7YqSGx"]), canManage: !0 }), i);
            }, [e]),
            [n, l] = i.useState(""),
            s = i.useMemo(() => {
                var e;
                let i = (e = n).startsWith("#") ? e.substr(1) : e;
                return (0, g.I)(t, A, i);
            }, [t, n]);
        return { query: n, results: s, setQuery: l, unfilteredCount: t.length };
    })(e);
    return { ...t, results: t.results.map((e) => ({ ...e, type: s.RA.CHANNEL })) };
}
function S(e) {
    let t = (function (e) {
        let t = (0, f.bG)([v.A], () => v.A.getGuild(e));
        b()(null != t, "guild must be present to be editing its integration settings");
        let n = (0, f.bG)([d.A], () => d.A.getHighestRole(t)),
            l = (0, f.yK)([N.Ay], () => N.Ay.getMembers(e), [e]),
            s = (0, f.cf)([m.default], () => m.default.getUsers()),
            a = (0, f.bG)([C.A], () => C.A.getSortedRoles(e), [e]),
            r = i.useMemo(() => {
                let e = [];
                for (let n of l) {
                    let i = s[n.userId];
                    if (null == i || i.bot) continue;
                    let l =
                        i.id !== t.ownerId &&
                        !E.$3({ permission: h.xBc.ADMINISTRATOR, user: i, context: t }) &&
                        d.A.canManageUser(h.xBc.USE_APPLICATION_COMMANDS, i, t);
                    e.push({ id: i.id, canManage: l, nick: n.nick, username: i.username });
                }
                return e;
            }, [t, l, s]),
            o = i.useMemo(() => {
                let e = [];
                for (let i of a) {
                    if (i.managed && i.tags?.bot_id != null) continue;
                    let l = !(0, j._m)(i, h.xBc.ADMINISTRATOR) && d.A.isRoleHigher(t, n, i),
                        s = { id: i.id, name: i.name, canManage: l };
                    (0, j.Oy)(i) ? e.unshift(s) : e.push(s);
                }
                return e;
            }, [a, t, n]),
            [c, u] = i.useState(""),
            x = i.useMemo(() => {
                var t;
                let n = (t = c).startsWith("@") ? t.substr(1) : t,
                    i = c.startsWith("@") ? o.filter((t) => t.id === e) : o;
                return { members: (0, g.I)(r, I, n), roles: (0, g.I)(i, T, n) };
            }, [e, r, c, o]);
        return { query: c, results: x, setQuery: u, unfilteredCount: x.members.length + x.roles.length };
    })(e);
    return {
        ...t,
        results: t.results.roles
            .map((e) => ({ ...e, type: s.RA.ROLE }))
            .concat(t.results.members.map((e) => ({ ...e, type: s.RA.USER }))),
    };
}
function k(e) {
    let {
            editPermissions: t,
            guildId: n,
            hasMemberSearch: s,
            overwrittenKeys: r,
            search: o,
            selectedPermissionCount: c,
        } = e,
        [d, u] = i.useState(null),
        { query: m, results: g, setQuery: h } = o(n),
        [x, A] = i.useState({}),
        p = i.useMemo(() => Object.keys(x).length, [x]),
        b = p + c >= 100,
        f = i.useMemo(() => g.filter((e) => !r.includes((0, a.Eu)(e.id, e.type))), [r, g]),
        j = i.useCallback(
            (e, t) => {
                A((n) => {
                    let i = (0, a.Eu)(e, t),
                        l = { ...n };
                    return (i in n ? delete l[i] : b || (l[i] = { id: e, permission: !0, type: t }), l);
                });
            },
            [b, A],
        ),
        N = i.useCallback((e, t) => (0, a.Eu)(e, t) in x, [x]),
        C = i.useCallback(() => {
            t(x, []);
        }, [t, x]);
    i.useEffect(() => () => clearTimeout(d), [d]);
    let v = i.useCallback(
        (e) => {
            (h(e),
                s &&
                    u((t) =>
                        (clearTimeout(t), 0 === e.length)
                            ? null
                            : setTimeout(() => {
                                  l.A.requestMembers(n, e, 200, !1);
                              }, 500),
                    ));
        },
        [n, s, h, u],
    );
    return (
        i.useEffect(() => {
            l.A.requestMembers(n, void 0, 200, !1);
        }, [n]),
        {
            query: m,
            setQuery: h,
            setSearchQuery: v,
            filteredResults: f,
            onSelect: j,
            isSelected: N,
            submit: C,
            newSelectedOverwriteCount: p,
            maximumPermissionsSelected: b,
        }
    );
}
n(73510);
