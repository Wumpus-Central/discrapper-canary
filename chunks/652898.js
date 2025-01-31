n.d(t, { Z: () => h }), n(47120), n(773603);
var i = n(990547),
    r = n(283693),
    a = n(44609),
    s = n(131704),
    o = n(314897),
    l = n(626135),
    u = n(573261),
    c = n(264229),
    d = n(245335),
    f = n(981631);
function _(e) {
    let t = null;
    if (null != e && null != e.channel) {
        let n = e.channel;
        t = e.target_type === d.Iq.STREAM ? f.dAT.STREAM : e.target_type === d.Iq.EMBEDDED_APPLICATION ? f.dAT.APPLICATION : (0, s.bc)(n.type) ? f.dAT.GDM_INVITE : null == n || (0, s.hv)(n.type) ? f.dAT.FRIEND_INVITE : f.dAT.SERVER_INVITE;
    }
    return t;
}
let p = new Map();
function h(e, t, n) {
    if ((l.default.track(f.rMx.INVITE_OPENED, { invite_code: e }), p.has(e))) return p.get(e);
    let s = (0, c.fU)(e),
        d = {
            ...n,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: s.guildScheduledEventId,
            with_permissions: (0, a.gY)({ location: 'resolveInvite' })
        },
        h = u.Z.get({
            url: f.ANM.INVITE(s.baseCode),
            query: d,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var i, a, l, u, c, d;
                    let p = e.body,
                        h = (null === (i = e.body) || void 0 === i ? void 0 : i.code) === f.evJ.USER_BANNED;
                    return (0, r.iG)({
                        resolved: e.ok,
                        guild_id: null == p ? void 0 : null === (a = p.guild) || void 0 === a ? void 0 : a.id,
                        channel_id: null == p ? void 0 : null === (l = p.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == p ? void 0 : null === (u = p.channel) || void 0 === u ? void 0 : u.type,
                        inviter_id: null == p ? void 0 : null === (c = p.inviter) || void 0 === c ? void 0 : c.id,
                        code: s.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: o.default.isAuthenticated(),
                        size_total: null == p ? void 0 : p.approximate_member_count,
                        size_online: null == p ? void 0 : p.approximate_presence_count,
                        destination_user_id: null == p ? void 0 : null === (d = p.target_user) || void 0 === d ? void 0 : d.id,
                        invite_type: _(p),
                        user_banned: h
                    });
                }
            },
            rejectWithError: !1
        })
            .then(
                (i) => {
                    let r = i.body;
                    return (
                        null != t &&
                            l.default.track(
                                f.rMx.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != r.guild ? r.guild.id : null,
                                    channel_id: null != r.channel ? r.channel.id : null,
                                    channel_type: null != r.channel ? r.channel.type : null,
                                    inviter_id: r.inviter ? r.inviter.id : null,
                                    code: s.baseCode,
                                    input_value: null == n ? void 0 : n.inputValue,
                                    location: t,
                                    authenticated: o.default.isAuthenticated(),
                                    size_total: r.approximate_member_count,
                                    size_online: r.approximate_presence_count,
                                    destination_user_id: null != r.target_user ? r.target_user.id : null,
                                    invite_type: _(r)
                                },
                                { flush: !0 }
                            ),
                        {
                            invite: r,
                            code: e
                        }
                    );
                },
                (i) => {
                    let r = null != i.body && i.body.code === f.evJ.USER_BANNED;
                    if (null != t) {
                        var a, u;
                        l.default.track(
                            f.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: s.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: o.default.isAuthenticated(),
                                user_banned: r,
                                error_code: null === (a = i.body) || void 0 === a ? void 0 : a.code,
                                error_message: null === (u = i.body) || void 0 === u ? void 0 : u.message
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: r
                    };
                }
            )
            .finally(() => {
                p.delete(e);
            });
    return p.set(e, h), h;
}
