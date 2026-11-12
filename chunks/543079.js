var n = l(620632),
    i = l(73153),
    s = l(149468),
    C = l(46653),
    a = l(696451),
    r = l(129230),
    d = l(504049),
    o = l(652215);
l.d(
    t,
    {},
    {
        V: async function (e, t, l, c) {
            let { body: u } = await n.Bo.post({
                url: o.Rsh.BULK_GUILD_ROLE(e),
                body: { role_ids: t, action: l === d.Nj.ADD_ROLE ? "add" : "remove", user_ids: c },
                rejectWithError: (0, n.fT)(),
            });
            for (let n of u.applied_user_ids) {
                let s = a.Ay.getMember(e, n);
                if (null != s)
                    for (let C of t) {
                        let t = s.roles.includes(C);
                        l !== d.Nj.ADD_ROLE || t
                            ? l === d.Nj.REMOVE_ROLE &&
                              t &&
                              i.h.dispatch({ type: "GUILD_ROLE_MEMBER_REMOVE", guildId: e, roleId: C, userId: n })
                            : i.h.dispatch({ type: "GUILD_ROLE_MEMBER_ADD", guildId: e, roleId: C, userId: n });
                    }
            }
            let m = [...u.applied_user_ids, ...u.unchanged_user_ids];
            return (
                r.default.track(o.HAw.BULK_MODERATION_ACTION_COMPLETED, {
                    ...(0, s.H$)(e),
                    action_type: l,
                    target_user_ids: c,
                    mod_user_id: C.default.getId(),
                    successful_user_ids: m,
                    location: "MemberSafetyPageActionNotice",
                }),
                { succeeded: m.length, failed: u.failed.length }
            );
        },
    },
);
