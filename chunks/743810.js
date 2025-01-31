n.d(t, {
    Nv: () => C,
    pd: () => x,
    uX: () => f,
    wk: () => p
});
var i = n(350483),
    s = n(220444),
    r = n(905423),
    l = n(131704),
    a = n(592125),
    o = n(306680),
    c = n(944486),
    d = n(9156),
    u = n(981631),
    m = n(490897);
let h = (e, t) => {
        let n = a.Z.getChannel(t);
        return null != n && ((0, l.hv)(n.type) || u.TPd.GUILD_VOCAL.has(n.type) ? o.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!d.ZP.isChannelMuted(e, t) || o.ZP.getMentionCount(t) > 0) && (0, s.d)(n));
    },
    g = (e, t) => (t === m.W.GUILD_EVENT ? !d.ZP.isMuteScheduledEventsEnabled(e) && o.ZP.hasUnread(e, t) : o.ZP.hasUnread(e, t)),
    _ = (e, t) => {
        let n = a.Z.getChannel(t);
        return !!(null != n && u.TPd.GUILD_VOCAL.has(n.type)) && (o.ZP.getMentionCount(t) > 0 || (c.Z.getVoiceChannelId() === t && o.ZP.getUnreadCount(t) > 0));
    },
    x = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null !== (e = r.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: h,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: g,
                    ensureChatIsVisible: _,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    p = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null !== (e = r.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: h,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: g,
                    ensureChatIsVisible: _,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    E = (e, t) => o.ZP.getMentionCount(t) > 0,
    C = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: E,
                ensureChatIsVisible: _,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    f = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: E,
                ensureChatIsVisible: _,
                withVoiceChannels: !0
            }),
            !1
        )
    };
