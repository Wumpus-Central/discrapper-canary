"use strict";
n.d(t, { $9: () => m, KW: () => g, Ks: () => _, Nj: () => p, Tj: () => h, Zp: () => E, hs: () => f });
var r,
    i,
    s = n(64700),
    a = n(793574),
    o = n(58149),
    l = n(961350),
    u = n(954571),
    d = n(652215);
function c(e, t, n) {
    let r = { ...t, ...(0, o.H$)(t.guild_id ?? n) };
    u.default.track(e, r);
}
function _(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }), c(d.HAw.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function f(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { selected_role_count: t.size, guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }),
                c(d.HAw.MOD_DASH_FILTER_ROLES, n);
        },
        [e],
    );
}
var E =
    (((r = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
    (r.COMMUNICATION_DISABLED = "communication_disabled"),
    (r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
    (r.USERNAME_QUARANTINED = "username_quarantined"),
    r);
function h(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { flag_type: t, guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }),
                c(d.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e],
    );
}
var p =
    (((i = {}).BAN = "ban"),
    (i.KICK = "kick"),
    (i.MUTE = "mute"),
    (i.TIMEOUT = "timeout"),
    (i.ADD_ROLE = "add_role"),
    (i.REMOVE_ROLE = "remove_role"),
    (i.COPY_ID = "copy_id"),
    (i.CHANGE_NICKNAME = "change_nickname"),
    i);
function m(e, t) {
    let { location: n, targetUserId: r, targets: i, locations: a } = t;
    return s.useCallback(
        (t) => {
            let s = {
                action_type: t,
                mod_user_id: l.default.getId(),
                guild_id: e,
                location: n,
                locations: a,
                target_user_id: r ?? void 0,
                targets: i ?? void 0,
            };
            c(d.HAw.MODERATION_ACTION, s);
        },
        [e, n, r, i, a],
    );
}
function g(e, t) {
    c(d.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
}
