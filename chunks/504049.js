n.d(t, {
    $9: () => f,
    KW: () => h,
    Ks: () => d,
    Nj: () => T,
    Tj: () => A,
    Zp: () => g,
    hs: () => _,
});
var l,
    r,
    a = n(64700),
    i = n(793574),
    s = n(58149),
    o = n(961350),
    c = n(954571),
    u = n(652215);
function E(e, t, n) {
    var l;
    let r = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
                (l = l.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    }),
                )),
                l.forEach(function (t) {
                    var l;
                    (l = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: l,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = l);
                });
        }
        return e;
    })({}, t, (0, s.H$)(null != (l = t.guild_id) ? l : n));
    c.default.track(e, r);
}
function d(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = {
                guild_id: e,
                location: i.A.MEMBER_SAFETY_PAGE,
            }),
                E(u.HAw.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function _(e) {
    return a.useCallback(
        (t) => {
            let n;
            (n = {
                selected_role_count: t.size,
                guild_id: e,
                location: i.A.MEMBER_SAFETY_PAGE,
            }),
                E(u.HAw.MOD_DASH_FILTER_ROLES, n);
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
            (n = {
                flag_type: t,
                guild_id: e,
                location: i.A.MEMBER_SAFETY_PAGE,
            }),
                E(u.HAw.MOD_DASH_FILTER_SAFETY_FLAGS, n);
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
function f(e, t) {
    let { location: n, targetUserId: l, targets: r, locations: i } = t;
    return a.useCallback(
        (t) => {
            let a = {
                action_type: t,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: null != l ? l : void 0,
                targets: null != r ? r : void 0,
            };
            E(u.HAw.MODERATION_ACTION, a);
        },
        [e, n, l, r, i],
    );
}
function h(e, t) {
    E(u.HAw.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t,
    });
}
