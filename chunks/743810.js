n.d(t, {
    Nv: () => b,
    pd: () => h,
    uX: () => y,
    wk: () => g,
});
var r = n(350483),
    i = n(220444),
    a = n(905423),
    o = n(131704),
    s = n(592125),
    l = n(306680),
    c = n(944486),
    u = n(9156),
    d = n(981631),
    f = n(490897);
let p = (e, t) => {
        let n = s.Z.getChannel(t);
        return (
            null != n &&
            ((0, o.hv)(n.type) || d.TPd.GUILD_VOCAL.has(n.type)
                ? l.ZP.getMentionCount(t) > 0 || c.Z.getVoiceChannelId() === t
                : (!u.ZP.isChannelMuted(e, t) || l.ZP.getMentionCount(t) > 0) && (0, i.d)(n))
        );
    },
    _ = (e, t) =>
        t === f.W.GUILD_EVENT ? !u.ZP.isMuteScheduledEventsEnabled(e) && l.ZP.hasUnread(e, t) : l.ZP.hasUnread(e, t),
    m = (e, t) => {
        let n = s.Z.getChannel(t);
        return (
            null != n &&
            !!d.TPd.GUILD_VOCAL.has(n.type) &&
            (l.ZP.getMentionCount(t) > 0 || (c.Z.getVoiceChannelId() === t && l.ZP.getUnreadCount(t) > 0))
        );
    },
    h = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = a.Z.getState().guildId) ? e : d.ME;
            return (
                (0, r.Z)(1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === t || !u.ZP.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: m,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    g = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = a.Z.getState().guildId) ? e : d.ME;
            return (
                (0, r.Z)(-1, {
                    channelPredicate: p,
                    guildPredicate: (e) => e === t || !u.ZP.isMuted(e),
                    guildFeaturePredicate: _,
                    ensureChatIsVisible: m,
                    withVoiceChannels: !0,
                }),
                !1
            );
        },
    },
    E = (e, t) => l.ZP.getMentionCount(t) > 0,
    b = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.Z)(1, {
                channelPredicate: E,
                ensureChatIsVisible: m,
                withVoiceChannels: !0,
            }),
            !1
        ),
    },
    y = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => (
            (0, r.Z)(-1, {
                channelPredicate: E,
                ensureChatIsVisible: m,
                withVoiceChannels: !0,
            }),
            !1
        ),
    };
