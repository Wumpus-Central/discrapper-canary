n.d(t, { U: () => A });
var i = n(478437),
    s = n(367513),
    r = n(604681),
    a = n(313961),
    l = n(672385),
    o = n(950191),
    c = n(761640),
    d = n(734057),
    u = n(309010),
    _ = n(967198),
    m = n(652215);
let A = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = _.A.getGuildId(),
            t = u.A.getChannelId(e),
            n = d.A.getChannel(t);
        if (null != t && null != n && n.type === i.r.GUILD_VOICE)
            return s.A.updateChatOpen(t, !a.A.getChatOpen(t), "toggle users keybind"), !1;
        if (null != t && null != n && n.type === i.r.DM) {
            let e = c.Ay.getSection(t, n?.isDM()),
                i = (0, o.AP)(n.getRecipientId()),
                s = e === m.YvQ.PROFILE;
            return (0, l.am)({ displayProfile: i, isProfileOpen: !s }), r.A.toggleUserProfileSidebarSection(), !1;
        }
        return r.A.toggleMembersSection(), !1;
    },
};
