n.d(t, { Z: () => b }), n(388685), n(457542);
var r = n(990547),
    i = n(283693),
    a = n(131704),
    o = n(314897),
    s = n(430824),
    l = n(626135),
    c = n(573261),
    u = n(264229),
    d = n(245335),
    f = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t =
            e.target_type === d.Iq.STREAM
                ? f.dAT.STREAM
                : e.target_type === d.Iq.EMBEDDED_APPLICATION
                  ? f.dAT.APPLICATION
                  : (0, a.bc)(n.type)
                    ? f.dAT.GDM_INVITE
                    : null == n || (0, a.hv)(n.type)
                      ? f.dAT.FRIEND_INVITE
                      : f.dAT.SERVER_INVITE;
    }
    return t;
}
let E = new Map();
function b(e, t, n) {
    if ((l.default.track(f.rMx.INVITE_OPENED, { invite_code: e }), E.has(e))) return E.get(e);
    let a = (0, u.fU)(e),
        d = h(_({}, n), {
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: a.guildScheduledEventId,
            with_permissions: !0,
        }),
        p = c.Z.get({
            url: f.ANM.INVITE(a.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var r, l, c, u, d, p, _;
                    let m = e.body,
                        h = (null == (r = e.body) ? void 0 : r.code) === f.evJ.USER_BANNED;
                    return (0, i.iG)({
                        resolved: e.ok,
                        guild_id: null == m || null == (l = m.guild) ? void 0 : l.id,
                        channel_id: null == m || null == (c = m.channel) ? void 0 : c.id,
                        channel_type: null == m || null == (u = m.channel) ? void 0 : u.type,
                        inviter_id: null == m || null == (d = m.inviter) ? void 0 : d.id,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: o.default.isAuthenticated(),
                        size_total: null == m ? void 0 : m.approximate_member_count,
                        size_online: null == m ? void 0 : m.approximate_presence_count,
                        destination_user_id: null == m || null == (p = m.target_user) ? void 0 : p.id,
                        invite_type: g(m),
                        user_banned: h,
                        user_is_member: null != s.Z.getGuild(null == m || null == (_ = m.guild) ? void 0 : _.id),
                    });
                },
            },
            rejectWithError: !1,
        })
            .then(
                (r) => {
                    let i = r.body;
                    if (null != t) {
                        var c;
                        l.default.track(
                            f.rMx.INVITE_RESOLVED,
                            {
                                resolved: !0,
                                guild_id: null != i.guild ? i.guild.id : null,
                                channel_id: null != i.channel ? i.channel.id : null,
                                channel_type: null != i.channel ? i.channel.type : null,
                                inviter_id: i.inviter ? i.inviter.id : null,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: o.default.isAuthenticated(),
                                size_total: i.approximate_member_count,
                                size_online: i.approximate_presence_count,
                                destination_user_id: null != i.target_user ? i.target_user.id : null,
                                invite_type: g(i),
                                user_is_member:
                                    null != s.Z.getGuild(null == i || null == (c = i.guild) ? void 0 : c.id),
                            },
                            { flush: !0 },
                        );
                    }
                    return {
                        invite: i,
                        code: e,
                    };
                },
                (r) => {
                    let i = null != r.body && r.body.code === f.evJ.USER_BANNED;
                    if (null != t) {
                        var s, c;
                        l.default.track(
                            f.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: o.default.isAuthenticated(),
                                user_banned: i,
                                error_code: null == (s = r.body) ? void 0 : s.code,
                                error_message: null == (c = r.body) ? void 0 : c.message,
                            },
                            { flush: !0 },
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i,
                    };
                },
            )
            .finally(() => {
                E.delete(e);
            });
    return E.set(e, p), p;
}
