var i = n(136722),
    r = n(855986),
    a = n(260509),
    s = n(71393),
    l = n(576705),
    o = n(287809),
    d = n(488926),
    c = n(633340),
    u = n(402655),
    _ = n(652215);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
        [n, i] = t,
        r = n.getGuild(e);
    return { user: i.getCurrentUser(), guild: r };
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, o.default],
        n = E(e, t);
    return null != n && i.X8(d.cc({ user: n.user, context: n.guild, checkElevated: !1 }), u.M);
}
function f(e) {
    return (0, r.bG)([s.A, o.default], () => A(e, [s.A, o.default]), [e]);
}
n.d(
    t,
    {},
    {
        Ml: A,
        O6: function (e, t) {
            return (0, r.bG)(
                [l.A, s.A],
                () => {
                    let n = s.A.getGuild(e);
                    return null != n && l.A.canManageUser(_.xBc.BAN_MEMBERS, t, n);
                },
                [e, t],
            );
        },
        Ph: function (e, t) {
            let n = s.A.getGuild(e);
            return null != n && l.A.canManageUser(_.xBc.BAN_MEMBERS, t, n);
        },
        Y0: function (e) {
            return (0, r.bG)(
                [s.A, l.A],
                () => {
                    let t = s.A.getGuild(e);
                    return null != t && l.A.can(_.xBc.MANAGE_GUILD, t);
                },
                [e],
            );
        },
        dQ: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A;
            return e.features.has(_.GuildFeatures.PRUNE_REQUIRES_ADMIN)
                ? (0, a.bM)(e, t) || n.can(_.xBc.ADMINISTRATOR, e)
                : n.can(i.kg(_.xBc.MANAGE_GUILD, _.xBc.KICK_MEMBERS), e);
        },
        fw: f,
        lN: function (e) {
            let t,
                n,
                a,
                d,
                u,
                A,
                h =
                    ((t = f(e)),
                    (n = (0, r.bG)(
                        [s.A, o.default],
                        () =>
                            (function (e) {
                                let t =
                                        arguments.length > 1 && void 0 !== arguments[1]
                                            ? arguments[1]
                                            : [s.A, o.default],
                                    n = E(e, t);
                                return (
                                    null != n &&
                                    l.A.can(_.xBc.MANAGE_GUILD, n.guild) &&
                                    l.A.can(_.xBc.BAN_MEMBERS, n.guild)
                                );
                            })(e, [s.A, o.default]),
                        [e],
                    )),
                    t && n),
                {
                    canAccessBulkRole: I,
                    canAccessBulkKick: p,
                    canAccessBulkTimeout: m,
                } = ((a = c.A.useConfig({ guildId: e, location: "Members page bulk actions" }).enabled),
                (d = f(e)),
                (u = (0, r.cf)(
                    [s.A, l.A, o.default],
                    () => {
                        let t = E(e, [s.A, o.default])?.guild;
                        return {
                            role: l.A.can(_.xBc.MANAGE_ROLES, t),
                            kick: l.A.can(i.kg(_.xBc.MANAGE_GUILD, _.xBc.KICK_MEMBERS), t),
                            timeout: l.A.can(i.kg(_.xBc.MANAGE_GUILD, _.xBc.MODERATE_MEMBERS), t),
                        };
                    },
                    [e],
                )),
                {
                    canAccessBulkRole: (A = a && d) && u.role,
                    canAccessBulkKick: A && u.kick,
                    canAccessBulkTimeout: A && u.timeout,
                }),
                g = I || p || m;
            return {
                canAccessBulkActions: h || g,
                canAccessBulkBan: h,
                canAccessBulkRole: I,
                canAccessBulkKick: p,
                canAccessBulkTimeout: m,
                canSelectAnyMember: g,
            };
        },
    },
);
