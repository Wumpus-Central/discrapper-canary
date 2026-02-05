n.d(t, { $9: () => I, KW: () => N, Ks: () => _, Nj: () => T, Tj: () => A, Zp: () => g, hs: () => d });
var l,
    r,
    a = n(64700),
    i = n(793574),
    s = n(58149),
    o = n(961350),
    E = n(954571),
    u = n(652215);
function c(e, t, n) {
    let l = { ...t, ...(0, s.H$)(t.guild_id ?? n) };
    E.default.track(e, l);
}
function _(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { guild_id: e, location: i.A.MEMBER_SAFETY_PAGE }), c(u.HAw.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function d(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { selected_role_count: t.size, guild_id: e, location: i.A.MEMBER_SAFETY_PAGE }),
                c(u.HAw.MOD_DASH_FILTER_ROLES, n);
        },
        [e],
    );
}
var g =
    (((l = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
    (l.COMMUNICATION_DISABLED = "communication_disabled"),
    (l.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
    (l.USERNAME_QUARANTINED = "username_quarantined"),
    l);
function A(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = { flag_type: t, guild_id: e, location: i.A.MEMBER_SAFETY_PAGE }),
                c(u.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e],
    );
}
var T =
    (((r = {}).BAN = "ban"),
    (r.KICK = "kick"),
    (r.MUTE = "mute"),
    (r.TIMEOUT = "timeout"),
    (r.ADD_ROLE = "add_role"),
    (r.REMOVE_ROLE = "remove_role"),
    (r.COPY_ID = "copy_id"),
    (r.CHANGE_NICKNAME = "change_nickname"),
    r);
function I(e, t) {
    let { location: n, targetUserId: l, targets: r, locations: i } = t;
    return a.useCallback(
        (t) => {
            let a = {
                action_type: t,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: l ?? void 0,
                targets: r ?? void 0,
            };
            c(u.HAw.MODERATION_ACTION, a);
        },
        [e, n, l, r, i],
    );
}
function N(e, t) {
    c(u.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
}
