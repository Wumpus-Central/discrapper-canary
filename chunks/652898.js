n.d(t, { Z: () => y }), n(47120), n(773603);
var r = n(990547),
    i = n(283693),
    o = n(44609),
    a = n(131704),
    s = n(314897),
    l = n(430824),
    c = n(626135),
    u = n(573261),
    d = n(264229),
    f = n(245335),
    _ = n(981631);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function g(e, t) {
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
function E(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t = e.target_type === f.Iq.STREAM ? _.dAT.STREAM : e.target_type === f.Iq.EMBEDDED_APPLICATION ? _.dAT.APPLICATION : (0, a.bc)(n.type) ? _.dAT.GDM_INVITE : null == n || (0, a.hv)(n.type) ? _.dAT.FRIEND_INVITE : _.dAT.SERVER_INVITE;
    }
    return t;
}
let b = new Map();
function y(e, t, n) {
    if ((c.default.track(_.rMx.INVITE_OPENED, { invite_code: e }), b.has(e))) return b.get(e);
    let a = (0, d.fU)(e),
        f = g(h({}, n), {
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: a.guildScheduledEventId,
            with_permissions: (0, o.gY)({ location: 'resolveInvite' })
        }),
        p = u.Z.get({
            url: _.ANM.INVITE(a.baseCode),
            query: f,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var r, o, c, u, d, f, p;
                    let h = e.body,
                        m = (null == (r = e.body) ? void 0 : r.code) === _.evJ.USER_BANNED;
                    return (0, i.iG)({
                        resolved: e.ok,
                        guild_id: null == h || null == (o = h.guild) ? void 0 : o.id,
                        channel_id: null == h || null == (c = h.channel) ? void 0 : c.id,
                        channel_type: null == h || null == (u = h.channel) ? void 0 : u.type,
                        inviter_id: null == h || null == (d = h.inviter) ? void 0 : d.id,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: null == h ? void 0 : h.approximate_member_count,
                        size_online: null == h ? void 0 : h.approximate_presence_count,
                        destination_user_id: null == h || null == (f = h.target_user) ? void 0 : f.id,
                        invite_type: E(h),
                        user_banned: m,
                        user_is_member: null != l.Z.getGuild(null == h || null == (p = h.guild) ? void 0 : p.id)
                    });
                }
            },
            rejectWithError: !1
        })
            .then(
                (r) => {
                    let i = r.body;
                    if (null != t) {
                        var o;
                        c.default.track(
                            _.rMx.INVITE_RESOLVED,
                            {
                                resolved: !0,
                                guild_id: null != i.guild ? i.guild.id : null,
                                channel_id: null != i.channel ? i.channel.id : null,
                                channel_type: null != i.channel ? i.channel.type : null,
                                inviter_id: i.inviter ? i.inviter.id : null,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                size_total: i.approximate_member_count,
                                size_online: i.approximate_presence_count,
                                destination_user_id: null != i.target_user ? i.target_user.id : null,
                                invite_type: E(i),
                                user_is_member: null != l.Z.getGuild(null == i || null == (o = i.guild) ? void 0 : o.id)
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: i,
                        code: e
                    };
                },
                (r) => {
                    let i = null != r.body && r.body.code === _.evJ.USER_BANNED;
                    if (null != t) {
                        var o, l;
                        c.default.track(
                            _.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                user_banned: i,
                                error_code: null == (o = r.body) ? void 0 : o.code,
                                error_message: null == (l = r.body) ? void 0 : l.message
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i
                    };
                }
            )
            .finally(() => {
                b.delete(e);
            });
    return b.set(e, p), p;
}
