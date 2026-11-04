var i,
    r,
    a = n(582128),
    s = n(793574),
    l = n(149468),
    o = n(46653),
    d = n(129230),
    c = n(652215);
function u(e, t, n) {
    let i = { ...t, ...(0, l.H$)(t.guild_id ?? n) };
    d.default.track(e, i);
}
var _ =
        (((i = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (i.COMMUNICATION_DISABLED = "communication_disabled"),
        (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (i.USERNAME_QUARANTINED = "username_quarantined"),
        i),
    E =
        (((r = {}).BAN = "ban"),
        (r.KICK = "kick"),
        (r.MUTE = "mute"),
        (r.TIMEOUT = "timeout"),
        (r.ADD_ROLE = "add_role"),
        (r.REMOVE_ROLE = "remove_role"),
        (r.COPY_ID = "copy_id"),
        (r.CHANGE_NICKNAME = "change_nickname"),
        r);
n.d(
    t,
    {},
    {
        $9: function (e, t) {
            let { location: n, targetUserId: i, targets: r, locations: s } = t;
            return a.useCallback(
                (t) => {
                    let a = {
                        action_type: t,
                        mod_user_id: o.default.getId(),
                        guild_id: e,
                        location: n,
                        locations: s,
                        target_user_id: i ?? void 0,
                        targets: r ?? void 0,
                    };
                    u(c.HAw.MODERATION_ACTION, a);
                },
                [e, n, i, r, s],
            );
        },
        KW: function (e, t) {
            u(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
        },
        Ks: function (e) {
            return a.useCallback(
                (t) => {
                    let n;
                    ((n = { guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }), u(c.HAw.MOD_DASH_SEARCH_MEMBERS, n));
                },
                [e],
            );
        },
        Nj: E,
        Tj: function (e) {
            return a.useCallback(
                (t) => {
                    let n;
                    ((n = { flag_type: t, guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }),
                        u(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n));
                },
                [e],
            );
        },
        Zp: _,
        hs: function (e) {
            return a.useCallback(
                (t) => {
                    let n;
                    ((n = { selected_role_count: t.size, guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }),
                        u(c.HAw.MOD_DASH_FILTER_ROLES, n));
                },
                [e],
            );
        },
    },
);
