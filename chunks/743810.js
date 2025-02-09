t.d(n, {
    Nv: () => S,
    pd: () => h,
    uX: () => _,
    wk: () => g
});
var i = t(350483),
    r = t(220444),
    s = t(905423),
    l = t(131704),
    o = t(592125),
    a = t(306680),
    d = t(944486),
    c = t(9156),
    u = t(981631),
    E = t(490897);
let p = (e, n) => {
        let t = o.Z.getChannel(n);
        return null != t && ((0, l.hv)(t.type) || u.TPd.GUILD_VOCAL.has(t.type) ? a.ZP.getMentionCount(n) > 0 || d.Z.getVoiceChannelId() === n : (!c.ZP.isChannelMuted(e, n) || a.ZP.getMentionCount(n) > 0) && (0, r.d)(t));
    },
    b = (e, n) => (n === E.W.GUILD_EVENT ? !c.ZP.isMuteScheduledEventsEnabled(e) && a.ZP.hasUnread(e, n) : a.ZP.hasUnread(e, n)),
    C = (e, n) => {
        let t = o.Z.getChannel(n);
        return !!(null != t && u.TPd.GUILD_VOCAL.has(t.type)) && (a.ZP.getMentionCount(n) > 0 || (d.Z.getVoiceChannelId() === n && a.ZP.getUnreadCount(n) > 0));
    },
    h = {
        binds: ['alt+shift+down'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                    guildFeaturePredicate: b,
                    ensureChatIsVisible: C,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    g = {
        binds: ['alt+shift+up'],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let n = null !== (e = s.Z.getState().guildId) && void 0 !== e ? e : u.ME;
            return (
                (0, i.Z)(-1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === n || !c.ZP.isMuted(e),
                    guildFeaturePredicate: b,
                    ensureChatIsVisible: C,
                    withVoiceChannels: !0
                }),
                !1
            );
        }
    },
    A = (e, n) => a.ZP.getMentionCount(n) > 0,
    S = {
        binds: ['mod+shift+alt+down'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(1, {
                channelPredicate: A,
                ensureChatIsVisible: C,
                withVoiceChannels: !0
            }),
            !1
        )
    },
    _ = {
        binds: ['mod+shift+alt+up'],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, i.Z)(-1, {
                channelPredicate: A,
                ensureChatIsVisible: C,
                withVoiceChannels: !0
            }),
            !1
        )
    };
