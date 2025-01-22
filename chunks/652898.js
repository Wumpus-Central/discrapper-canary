r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(47120);
var a = r(773603);
var o = r(990547),
    s = r(283693),
    l = r(44609),
    u = r(131704),
    c = r(314897),
    d = r(626135),
    f = r(573261),
    p = r(264229),
    h = r(245335),
    _ = r(981631);
function m(e) {
    let n = null;
    if (null != e && null != e.channel) {
        let r = e.channel;
        n = e.target_type === h.Iq.STREAM ? _.dAT.STREAM : e.target_type === h.Iq.EMBEDDED_APPLICATION ? _.dAT.APPLICATION : (0, u.bc)(r.type) ? _.dAT.GDM_INVITE : null == r || (0, u.hv)(r.type) ? _.dAT.FRIEND_INVITE : _.dAT.SERVER_INVITE;
    }
    return n;
}
let g = new Map();
function E(e, n, r) {
    if ((d.default.track(_.rMx.INVITE_OPENED, { invite_code: e }), g.has(e))) return g.get(e);
    let i = (0, p.fU)(e),
        a = {
            ...r,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: i.guildScheduledEventId,
            with_permissions: (0, l.gY)({ location: 'resolveInvite' })
        },
        u = f.Z.get({
            url: _.ANM.INVITE(i.baseCode),
            query: a,
            oldFormErrors: !0,
            trackedActionData: {
                event: o.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var a, o, l, u, d, f;
                    let p = e.body,
                        h = (null === (a = e.body) || void 0 === a ? void 0 : a.code) === _.evJ.USER_BANNED;
                    return (0, s.iG)({
                        resolved: e.ok,
                        guild_id: null == p ? void 0 : null === (o = p.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == p ? void 0 : null === (l = p.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == p ? void 0 : null === (u = p.channel) || void 0 === u ? void 0 : u.type,
                        inviter_id: null == p ? void 0 : null === (d = p.inviter) || void 0 === d ? void 0 : d.id,
                        code: i.baseCode,
                        input_value: null == r ? void 0 : r.inputValue,
                        location: n,
                        authenticated: c.default.isAuthenticated(),
                        size_total: null == p ? void 0 : p.approximate_member_count,
                        size_online: null == p ? void 0 : p.approximate_presence_count,
                        destination_user_id: null == p ? void 0 : null === (f = p.target_user) || void 0 === f ? void 0 : f.id,
                        invite_type: m(p),
                        user_banned: h
                    });
                }
            },
            rejectWithError: !1
        })
            .then(
                (a) => {
                    let o = a.body;
                    return (
                        null != n &&
                            d.default.track(
                                _.rMx.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != o.guild ? o.guild.id : null,
                                    channel_id: null != o.channel ? o.channel.id : null,
                                    channel_type: null != o.channel ? o.channel.type : null,
                                    inviter_id: o.inviter ? o.inviter.id : null,
                                    code: i.baseCode,
                                    input_value: null == r ? void 0 : r.inputValue,
                                    location: n,
                                    authenticated: c.default.isAuthenticated(),
                                    size_total: o.approximate_member_count,
                                    size_online: o.approximate_presence_count,
                                    destination_user_id: null != o.target_user ? o.target_user.id : null,
                                    invite_type: m(o)
                                },
                                { flush: !0 }
                            ),
                        {
                            invite: o,
                            code: e
                        }
                    );
                },
                (a) => {
                    let o = null != a.body && a.body.code === _.evJ.USER_BANNED;
                    if (null != n) {
                        var s, l;
                        d.default.track(
                            _.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: i.baseCode,
                                input_value: null == r ? void 0 : r.inputValue,
                                location: n,
                                authenticated: c.default.isAuthenticated(),
                                user_banned: o,
                                error_code: null === (s = a.body) || void 0 === s ? void 0 : s.code,
                                error_message: null === (l = a.body) || void 0 === l ? void 0 : l.message
                            },
                            { flush: !0 }
                        );
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: o
                    };
                }
            )
            .finally(() => {
                g.delete(e);
            });
    return g.set(e, u), u;
}
