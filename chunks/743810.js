n.d(t, {
    Nv: () => x,
    pd: () => f,
    uX: () => _,
    wk: () => b
});
var r = n(350483),
    i = n(220444),
    s = n(905423),
    a = n(131704),
    l = n(592125),
    o = n(306680),
    c = n(944486),
    d = n(9156),
    u = n(981631),
    m = n(490897);
let g = (e, t) => {
        let n = l.Z.getChannel(t);
        return null != n && ((0, a.hv)(n.type) || u.TPd.GUILD_VOCAL.has(n.type) ? o.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!d.ZP.isChannelMuted(e, t) || o.ZP.getMentionCount(t) > 0) && (0, i.d)(n));
    },
    p = (e, t) => (t === m.W.GUILD_EVENT ? !d.ZP.isMuteScheduledEventsEnabled(e) && o.ZP.hasUnread(e, t) : o.ZP.hasUnread(e, t)),
    h = (e, t) => {
        let n = l.Z.getChannel(t);
        return null != n && !!u.TPd.GUILD_VOCAL.has(n.type) && (o.ZP.getMentionCount(t) > 0 || (c.Z.getVoiceChannelId() === t && o.ZP.getUnreadCount(t) > 0));
    },
    f = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = s.Z.getState().guildId) ? e : u.ME;
            return (
                (0, r.Z)(1, {
                    channelPredicate: g,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: p,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    b = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = s.Z.getState().guildId) ? e : u.ME;
            return (
                (0, r.Z)(-1, {
                    channelPredicate: g,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: p,
                    ensureChatIsVisible: h,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    N = (e, t) => o.ZP.getMentionCount(t) > 0,
    x = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.Z)(1, {
                channelPredicate: N,
                ensureChatIsVisible: h,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    _ = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.Z)(-1, {
                channelPredicate: N,
                ensureChatIsVisible: h,
                withVoiceChannels: !0
            }),
            !1
        )
    };
