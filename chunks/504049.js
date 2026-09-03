n.d(t, { $9: () => f, KW: () => p, Ks: () => _, Nj: () => I, Tj: () => h, Zp: () => A, hs: () => E });
var i,
    r,
    a = n(582128),
    s = n(793574),
    l = n(95561),
    o = n(280450),
    d = n(174459),
    c = n(652215);
function u(e, t, n) {
    let i = { ...t, ...(0, l.H$)(t.guild_id ?? n) };
    d.default.track(e, i);
}
function _(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }), u(c.HAw.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function E(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { selected_role_count: t.size, guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }),
                u(c.HAw.MOD_DASH_FILTER_ROLES, n);
        },
        [e],
    );
}
var A =
    (((i = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
    (i.COMMUNICATION_DISABLED = "communication_disabled"),
    (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
    (i.USERNAME_QUARANTINED = "username_quarantined"),
    i);
function h(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { flag_type: t, guild_id: e, location: s.A.MEMBER_SAFETY_PAGE }),
                u(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e],
    );
}
var I =
    (((r = {}).BAN = "ban"),
    (r.KICK = "kick"),
    (r.MUTE = "mute"),
    (r.TIMEOUT = "timeout"),
    (r.ADD_ROLE = "add_role"),
    (r.REMOVE_ROLE = "remove_role"),
    (r.COPY_ID = "copy_id"),
    (r.CHANGE_NICKNAME = "change_nickname"),
    r);
function f(e, t) {
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
}
function p(e, t) {
    u(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
}
