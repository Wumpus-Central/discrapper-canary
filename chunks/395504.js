var i = n(855986),
    r = n(71393),
    a = n(576705),
    s = n(543465),
    l = n(287809),
    o = n(652215);
n.d(
    t,
    {},
    {
        WW: function (e) {
            let t = r.A.getGuild(e),
                n = l.default.getCurrentUser();
            return (
                null != e &&
                null != t &&
                null != n &&
                (t.features.has(o.GuildFeatures.COMMUNITY) || n.isStaff()) &&
                s.Ay.isOptInEnabled(e)
            );
        },
        Xn: function (e) {
            return (0, i.bG)([r.A, a.A], () => {
                let t = r.A.getGuild(e),
                    n = a.A.can(o.xBc.MANAGE_GUILD, t),
                    i = a.A.can(o.xBc.MANAGE_ROLES, t),
                    s = t?.features.has(o.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
                return null != t && n && i && !s;
            });
        },
        jN: function (e) {
            return (0, i.bG)([s.Ay, r.A, l.default], () => {
                let t = s.Ay.isOptInEnabled(e),
                    n = r.A.getGuild(e)?.features.has(o.GuildFeatures.COMMUNITY) ?? !1,
                    i = l.default.getCurrentUser()?.isStaff() ?? !1;
                return t && (n || i);
            });
        },
    },
);
