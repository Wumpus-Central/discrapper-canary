var t = n(855986),
    a = n(50268),
    s = n(317525),
    i = n(71393),
    r = n(576705),
    u = n(120747),
    o = n(652215),
    d = n(792996);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { guildId: l, roleId: n, targetChannelId: c } = e,
                m = (0, a.A)({ id: n, label: d.intl.string(d.t.sMsaLg) }),
                { role: x, canManageRoles: h } = (0, t.cf)(
                    [s.A, i.A, r.A],
                    () => {
                        let e = i.A.getGuild(l);
                        return {
                            role: null != l && null != n ? s.A.getRole(l, n) : void 0,
                            canManageRoles: null != e && r.A.can(o.xBc.MANAGE_ROLES, e),
                        };
                    },
                    [l, n],
                ),
                f = (0, u.A)({
                    targetChannelId: c,
                    mention: null != x && null != n ? { display: `@${x.name}`, raw: `<@&${n}>` } : null,
                });
            return {
                role: x,
                copyIdItem: m,
                mentionItem: f,
                canManageRoles: h,
                hasItems: null != x && (null != f || h || null != m),
            };
        },
    },
);
