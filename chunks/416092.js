n.d(t, {
    U: () => _,
});
var r = n(478437),
    i = n(367513),
    a = n(604681),
    s = n(313961),
    o = n(672385),
    l = n(950191),
    c = n(761640),
    u = n(734057),
    d = n(309010),
    f = n(967198),
    p = n(652215);
let _ = {
    binds: ["mod+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = f.A.getGuildId(),
            t = d.A.getChannelId(e),
            n = u.A.getChannel(t);
        if (null != t && null != n && n.type === r.r.GUILD_VOICE) return i.A.updateChatOpen(t, !s.A.getChatOpen(t)), !1;
        if (null != t && null != n && n.type === r.r.DM) {
            let e = c.Ay.getSection(t, null == n ? void 0 : n.isDM()),
                r = (0, l.AP)(n.getRecipientId()),
                i = e === p.YvQ.PROFILE;
            return (
                (0, o.am)({
                    displayProfile: r,
                    isProfileOpen: !i,
                }),
                a.A.toggleUserProfileSidebarSection(),
                !1
            );
        }
        return a.A.toggleMembersSection(), !1;
    },
};
