n.d(t, { Z: () => v }), n(47120), n(773603);
var r = n(990547),
    i = n(283693),
    o = n(44609),
    a = n(131704),
    s = n(314897),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t = e.target_type === d.Iq.STREAM ? f.dAT.STREAM : e.target_type === d.Iq.EMBEDDED_APPLICATION ? f.dAT.APPLICATION : (0, a.bc)(n.type) ? f.dAT.GDM_INVITE : null == n || (0, a.hv)(n.type) ? f.dAT.FRIEND_INVITE : f.dAT.SERVER_INVITE;
    }
    return t;
}
let E = new Map();
function v(e, t, n) {
    if ((l.default.track(f.rMx.INVITE_OPENED, { invite_code: e }), E.has(e))) return E.get(e);
    let a = (0, u.fU)(e),
        d = m(_({}, n), {
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: a.guildScheduledEventId,
            with_permissions: (0, o.gY)({ location: 'resolveInvite' })
        }),
        p = c.Z.get({
            url: f.ANM.INVITE(a.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var r, o, l, c, u, d;
                    let p = e.body,
                        _ = (null === (r = e.body) || void 0 === r ? void 0 : r.code) === f.evJ.USER_BANNED;
                    return (0, i.iG)({
                        resolved: e.ok,
                        guild_id: null == p ? void 0 : null === (o = p.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == p ? void 0 : null === (l = p.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == p ? void 0 : null === (c = p.channel) || void 0 === c ? void 0 : c.type,
                        inviter_id: null == p ? void 0 : null === (u = p.inviter) || void 0 === u ? void 0 : u.id,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: s.default.isAuthenticated(),
                        size_total: null == p ? void 0 : p.approximate_member_count,
                        size_online: null == p ? void 0 : p.approximate_presence_count,
                        destination_user_id: null == p ? void 0 : null === (d = p.target_user) || void 0 === d ? void 0 : d.id,
                        invite_type: g(p),
                        user_banned: _
                    });
                }
            },
            rejectWithError: !1
        })
            .then(
                (r) => {
                    let i = r.body;
                    return (
                        null != t &&
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
                                    authenticated: s.default.isAuthenticated(),
                                    size_total: i.approximate_member_count,
                                    size_online: i.approximate_presence_count,
                                    destination_user_id: null != i.target_user ? i.target_user.id : null,
                                    invite_type: g(i)
                                },
                                { flush: !0 }
                            ),
                        {
                            invite: i,
                            code: e
                        }
                    );
                },
                (r) => {
                    let i = null != r.body && r.body.code === f.evJ.USER_BANNED;
                    if (null != t) {
                        var o, c;
                        l.default.track(
                            f.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: s.default.isAuthenticated(),
                                user_banned: i,
                                error_code: null === (o = r.body) || void 0 === o ? void 0 : o.code,
                                error_message: null === (c = r.body) || void 0 === c ? void 0 : c.message
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
                E.delete(e);
            });
    return E.set(e, p), p;
}
