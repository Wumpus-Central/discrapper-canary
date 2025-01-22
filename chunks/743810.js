n.d(t, {
    Nv: function () {
        return _;
    },
    pd: function () {
        return x;
    },
    uX: function () {
        return C;
    },
    wk: function () {
        return f;
    }
});
var i = n(350483),
    r = n(220444),
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
        return null != n && ((0, a.hv)(n.type) || u.TPd.GUILD_VOCAL.has(n.type) ? o.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t : (!d.ZP.isChannelMuted(e, t) || o.ZP.getMentionCount(t) > 0) && (0, r.d)(n));
    },
    h = (e, t) => {
        if (t === m.W.GUILD_EVENT) return !d.ZP.isMuteScheduledEventsEnabled(e) && o.ZP.hasUnread(e, t);
        return o.ZP.hasUnread(e, t);
    },
    p = (e, t) => {
        let n = l.Z.getChannel(t);
        return !!(null != n && u.TPd.GUILD_VOCAL.has(n.type)) && (!!(o.ZP.getMentionCount(t) > 0) || (c.Z.getVoiceChannelId() === t && o.ZP.getUnreadCount(t) > 0));
    },
    x = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: g,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: h,
                    ensureChatIsVisible: p,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    f = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: g,
                    guildPredicate: (e) => e === t || !d.ZP.isMuted(e),
                    guildFeaturePredicate: h,
                    ensureChatIsVisible: p,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    E = (e, t) => o.ZP.getMentionCount(t) > 0,
    _ = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: E,
                ensureChatIsVisible: p,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    C = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: E,
                ensureChatIsVisible: p,
                withVoiceChannels: !0
            }),
            !1
        )
    };
