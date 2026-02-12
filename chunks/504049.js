"use strict";
n.d(t, { $9: () => A, KW: () => I, Ks: () => d, Nj: () => E, Tj: () => g, Zp: () => h, hs: () => f });
var r = n(64700),
    i = n(793574),
    a = n(58149),
    s = n(961350),
    o = n(954571),
    l = n(652215);
function u(e, t, n) {
    let r = { ...t, ...(0, a.H$)(t.guild_id ?? n) };
    o.default.track(e, r);
}
function c(e) {
    let t = { guild_id: e, location: i.A.MEMBER_SAFETY_PAGE };
    u(l.HAw.MOD_DASH_SEARCH_MEMBERS, t);
}
function d(e) {
    return r.useCallback(
        (t) => {
            c(e);
        },
        [e],
    );
}
function _(e, t) {
    let n = { selected_role_count: t.size, guild_id: e, location: i.A.MEMBER_SAFETY_PAGE };
    u(l.HAw.MOD_DASH_FILTER_ROLES, n);
}
function f(e) {
    return r.useCallback(
        (t) => {
            _(e, t);
        },
        [e],
    );
}
var h = (function (e) {
    return (
        (e.UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
        (e.COMMUNICATION_DISABLED = "communication_disabled"),
        (e.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
        (e.USERNAME_QUARANTINED = "username_quarantined"),
        e
    );
})({});
function p(e, t) {
    let n = { flag_type: t, guild_id: e, location: i.A.MEMBER_SAFETY_PAGE };
    u(l.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
}
function g(e) {
    return r.useCallback(
        (t) => {
            p(e, t);
        },
        [e],
    );
}
var E = (function (e) {
    return (
        (e.BAN = "ban"),
        (e.KICK = "kick"),
        (e.MUTE = "mute"),
        (e.TIMEOUT = "timeout"),
        (e.ADD_ROLE = "add_role"),
        (e.REMOVE_ROLE = "remove_role"),
        (e.COPY_ID = "copy_id"),
        (e.CHANGE_NICKNAME = "change_nickname"),
        e
    );
})({});
function A(e, t) {
    let { location: n, targetUserId: i, targets: a, locations: o } = t;
    return r.useCallback(
        (t) => {
            let r = {
                action_type: t,
                mod_user_id: s.default.getId(),
                guild_id: e,
                location: n,
                locations: o,
                target_user_id: i ?? void 0,
                targets: a ?? void 0,
            };
            u(l.HAw.MODERATION_ACTION, r);
        },
        [e, n, i, a, o],
    );
}
function I(e, t) {
    let n = { guild_id: e, location: t };
    u(l.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, n);
}
