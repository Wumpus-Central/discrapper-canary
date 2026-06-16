"use strict";
n.d(t, { $9: () => m, KW: () => g, Ks: () => _, Nj: () => E, Tj: () => p, Zp: () => f, hs: () => h });
var i,
    r,
    s = n(64700),
    a = n(793574),
    o = n(95561),
    l = n(495544),
    u = n(174459),
    c = n(652215);
function d(e, t, n) {
    let i = { ...t, ...(0, o.H$)(t.guild_id ?? n) };
    u.default.track(e, i);
}
function _(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }), d(c.HAw.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function h(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { selected_role_count: t.size, guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }),
                d(c.HAw.MOD_DASH_FILTER_ROLES, n);
        },
        [e],
    );
}
var f =
    (((i = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
    (i.COMMUNICATION_DISABLED = "communication_disabled"),
    (i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
    (i.USERNAME_QUARANTINED = "username_quarantined"),
    i);
function p(e) {
    return s.useCallback(
        (t) => {
            let n;
            (n = { flag_type: t, guild_id: e, location: a.A.MEMBER_SAFETY_PAGE }),
                d(c.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e],
    );
}
var E =
    (((r = {}).BAN = "ban"),
    (r.KICK = "kick"),
    (r.MUTE = "mute"),
    (r.TIMEOUT = "timeout"),
    (r.ADD_ROLE = "add_role"),
    (r.REMOVE_ROLE = "remove_role"),
    (r.COPY_ID = "copy_id"),
    (r.CHANGE_NICKNAME = "change_nickname"),
    r);
function m(e, t) {
    let { location: n, targetUserId: i, targets: r, locations: a } = t;
    return s.useCallback(
        (t) => {
            let s = {
                action_type: t,
                mod_user_id: l.default.getId(),
                guild_id: e,
                location: n,
                locations: a,
                target_user_id: i ?? void 0,
                targets: r ?? void 0,
            };
            d(c.HAw.MODERATION_ACTION, s);
        },
        [e, n, i, r, a],
    );
}
function g(e, t) {
    d(c.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, { guild_id: e, location: t });
}
