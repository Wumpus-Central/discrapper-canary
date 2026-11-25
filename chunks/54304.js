var l = n(855986),
    i = n(50268),
    a = n(317525),
    r = n(71393),
    s = n(576705),
    o = n(120747),
    u = n(652215),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, roleId: n, targetChannelId: d } = e,
                m = (0, i.A)({ id: n, label: c.intl.string(c.t.sMsaLg) }),
                { role: A, canManageRoles: p } = (0, l.cf)(
                    [a.A, r.A, s.A],
                    () => {
                        let e = r.A.getGuild(t);
                        return {
                            role: null != t && null != n ? a.A.getRole(t, n) : void 0,
                            canManageRoles: null != e && s.A.can(u.xBc.MANAGE_ROLES, e),
                        };
                    },
                    [t, n],
                ),
                h = (0, o.A)({
                    targetChannelId: d,
                    mention: null != A && null != n ? { display: `@${A.name}`, raw: `<@&${n}>` } : null,
                });
            return {
                role: A,
                copyIdItem: m,
                mentionItem: h,
                canManageRoles: p,
                hasItems: null != A && (null != h || p || null != m),
            };
        },
    },
);
