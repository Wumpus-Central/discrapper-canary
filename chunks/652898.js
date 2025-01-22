r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(47120);
var a = r(773603);
var o = r(990547),
    s = r(283693),
    l = r(131704),
    u = r(314897),
    c = r(626135),
    d = r(573261),
    f = r(264229),
    p = r(245335),
    h = r(981631);
function _(e) {
    let n = null;
    if (null != e && null != e.channel) {
        let r = e.channel;
        n = e.target_type === p.Iq.STREAM ? h.dAT.STREAM : e.target_type === p.Iq.EMBEDDED_APPLICATION ? h.dAT.APPLICATION : (0, l.bc)(r.type) ? h.dAT.GDM_INVITE : null == r || (0, l.hv)(r.type) ? h.dAT.FRIEND_INVITE : h.dAT.SERVER_INVITE;
    }
    return n;
}
let m = new Map();
function g(e, n, r) {
    if ((c.default.track(h.rMx.INVITE_OPENED, { invite_code: e }), m.has(e))) return m.get(e);
    let i = (0, f.fU)(e),
        a = {
            ...r,
            with_counts: !0,
            with_expiration: !0,
            guild_scheduled_event_id: i.guildScheduledEventId
        },
        l = d.Z.get({
            url: h.ANM.INVITE(i.baseCode),
            query: a,
            oldFormErrors: !0,
            trackedActionData: {
                event: o.NetworkActionNames.INVITE_RESOLVE,
                properties: (e) => {
                    var a, o, l, c, d, f;
                    let p = e.body,
                        m = (null === (a = e.body) || void 0 === a ? void 0 : a.code) === h.evJ.USER_BANNED;
                    return (0, s.iG)({
                        resolved: e.ok,
                        guild_id: null == p ? void 0 : null === (o = p.guild) || void 0 === o ? void 0 : o.id,
                        channel_id: null == p ? void 0 : null === (l = p.channel) || void 0 === l ? void 0 : l.id,
                        channel_type: null == p ? void 0 : null === (c = p.channel) || void 0 === c ? void 0 : c.type,
                        inviter_id: null == p ? void 0 : null === (d = p.inviter) || void 0 === d ? void 0 : d.id,
                        code: i.baseCode,
                        input_value: null == r ? void 0 : r.inputValue,
                        location: n,
                        authenticated: u.default.isAuthenticated(),
                        size_total: null == p ? void 0 : p.approximate_member_count,
                        size_online: null == p ? void 0 : p.approximate_presence_count,
                        destination_user_id: null == p ? void 0 : null === (f = p.target_user) || void 0 === f ? void 0 : f.id,
                        invite_type: _(p),
                        user_banned: m
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
                            c.default.track(
                                h.rMx.INVITE_RESOLVED,
                                {
                                    resolved: !0,
                                    guild_id: null != o.guild ? o.guild.id : null,
                                    channel_id: null != o.channel ? o.channel.id : null,
                                    channel_type: null != o.channel ? o.channel.type : null,
                                    inviter_id: o.inviter ? o.inviter.id : null,
                                    code: i.baseCode,
                                    input_value: null == r ? void 0 : r.inputValue,
                                    location: n,
                                    authenticated: u.default.isAuthenticated(),
                                    size_total: o.approximate_member_count,
                                    size_online: o.approximate_presence_count,
                                    destination_user_id: null != o.target_user ? o.target_user.id : null,
                                    invite_type: _(o)
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
                    let o = null != a.body && a.body.code === h.evJ.USER_BANNED;
                    if (null != n) {
                        var s, l;
                        c.default.track(
                            h.rMx.INVITE_RESOLVED,
                            {
                                resolved: !1,
                                code: i.baseCode,
                                input_value: null == r ? void 0 : r.inputValue,
                                location: n,
                                authenticated: u.default.isAuthenticated(),
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
                m.delete(e);
            });
    return m.set(e, l), l;
}
