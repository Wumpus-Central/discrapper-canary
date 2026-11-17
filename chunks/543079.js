var n = l(73153),
    i = l(149468),
    s = l(46653),
    a = l(696451),
    C = l(129230),
    r = l(504049),
    d = l(414849),
    o = l(652215);
l.d(
    t,
    {},
    {
        V: async function (e, t, l, c) {
            let u = await (0, d.D)(o.Rsh.BULK_GUILD_ROLE(e), {
                role_ids: t,
                action: l === r.Nj.ADD_ROLE ? "add" : "remove",
                user_ids: c,
            });
            for (let i of u.applied_user_ids) {
                let s = a.Ay.getMember(e, i);
                if (null != s)
                    for (let a of t) {
                        let t = s.roles.includes(a);
                        l !== r.Nj.ADD_ROLE || t
                            ? l === r.Nj.REMOVE_ROLE &&
                              t &&
                              n.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: a, userId: i })
                            : n.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: a, userId: i });
                    }
            }
            return (
                C.default.track(o.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                    ...(0, i.H$)(e),
                    action_type: l,
                    target_user_ids: c,
                    mod_user_id: s.default.getId(),
                    successful_user_ids: [...u.applied_user_ids, ...u.unchanged_user_ids],
                    location: "MemberSafetyPageActionNotice",
                }),
                u
            );
        },
    },
);
