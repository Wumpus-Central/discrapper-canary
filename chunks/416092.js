n.d(t, { U: () => E });
var i = n(478437),
    r = n(367513),
    l = n(604681),
    o = n(313961),
    s = n(672385),
    a = n(950191),
    d = n(761640),
    c = n(734057),
    u = n(309010),
    _ = n(967198),
    A = n(652215);
let E = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = _.A.getGuildId(),
            t = u.A.getChannelId(e),
            n = c.A.getChannel(t),
            E = null != t && n?.isVocalThread() === !0 && o.A.getUserParticipantCount(t) > 0;
        if (null != t && null != n && (n.type === i.r.GUILD_VOICE || E))
            return r.A.updateChatOpen(t, !o.A.getChatOpen(t), "toggle users keybind"), !1;
        if (null != t && null != n && n.type === i.r.DM) {
            let e = d.Ay.getSection(t, n?.isDM()),
                i = (0, a.AP)(n.getRecipientId()),
                r = e === A.YvQ.PROFILE;
            return (0, s.am)({ displayProfile: i, isProfileOpen: !r }), l.A.toggleUserProfileSidebarSection(), !1;
        }
        return l.A.toggleMembersSection(), !1;
    },
};
