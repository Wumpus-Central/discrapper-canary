r.d(n, {
    KS: function () {
        return _;
    },
    Th: function () {
        return m;
    },
    bT: function () {
        return h;
    }
});
var i = r(481060),
    a = r(281956),
    o = r(271383),
    s = r(430824),
    l = r(607744),
    u = r(594174),
    c = r(447003),
    d = r(176505),
    f = r(981631),
    p = r(388032);
function h(e, n, r, i) {
    if (null == e) return null;
    if (e.id === (null == n ? void 0 : n.rulesChannelId)) return p.intl.string(p.t['/7EhaW']);
    switch (e.type) {
        case f.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return p.intl.string(p.t.Lt3PAA);
            if (i) return p.intl.string(p.t.LKpYbm);
            if (e.isNSFW()) return p.intl.string(p.t.vvASTU);
            if ((0, c.Z)(e)) return p.intl.string(p.t.jQ1plp);
            return p.intl.string(p.t.t1yj0N);
        case f.d4z.GUILD_FORUM:
            let a = e.isMediaChannel();
            if (e.isNSFW()) return a ? p.intl.string(p.t['pZ/fYW']) : p.intl.string(p.t.ibmpPj);
            if ((0, c.Z)(e)) return a ? p.intl.string(p.t.gfVCfH) : p.intl.string(p.t.UbLM3N);
            return a ? p.intl.string(p.t.seKITE) : p.intl.string(p.t['0sDXdn']);
        case f.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return p.intl.string(p.t['pZ/fYW']);
            if ((0, c.Z)(e)) return p.intl.string(p.t.gfVCfH);
            return p.intl.string(p.t.seKITE);
        case f.d4z.GUILD_STAGE_VOICE:
            if (r) return p.intl.string(p.t.ZjZB3t);
            if ((0, c.Z)(e)) return p.intl.string(p.t['7pRuCQ']);
            return p.intl.string(p.t.eJFSiI);
        case f.d4z.GUILD_VOICE:
            if (r) return p.intl.string(p.t.xY8Wtr);
            if ((0, c.Z)(e)) return p.intl.string(p.t.qaY8Dg);
            return p.intl.string(p.t['0kBmo6']);
        case f.d4z.GUILD_ANNOUNCEMENT:
            if (e.isNSFW()) return p.intl.string(p.t.eRc6o6);
            if ((0, c.Z)(e)) return p.intl.string(p.t.EHLQws);
            return p.intl.string(p.t.GtDRi4);
        case f.d4z.GUILD_STORE:
            return p.intl.string(p.t.Ea4NDA);
        case f.d4z.DM:
            return p.intl.string(p.t.jN2DfX);
        case f.d4z.GROUP_DM:
            return p.intl.string(p.t['e5y+go']);
        case f.d4z.GUILD_DIRECTORY:
            return p.intl.string(p.t.IzZTIS);
        case f.d4z.PUBLIC_THREAD:
            return p.intl.string(p.t['7Xm5QE']);
        case f.d4z.PRIVATE_THREAD:
            return p.intl.string(p.t.F1zyvb);
        default:
            return null;
    }
}
function _(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: p = !1, video: h = !1, stream: _ = !1, hasActiveThreads: m = !1, textFocused: g = !1 } = r;
    if (null == e) return null;
    null == n && (n = s.Z.getGuild(e.getGuildId()));
    let E = (0, a.n)(null == n ? void 0 : n.id, [s.Z, l.Z, u.default, o.ZP]);
    if ((null == e ? void 0 : e.id) === (null == n ? void 0 : n.rulesChannelId)) return i.BookCheckIcon;
    switch (e.type) {
        case f.d4z.GUILD_ANNOUNCEMENT:
            if (m) {
                if (e.isNSFW()) return i.AnnouncementsWarningIcon;
                if ((0, c.Z)(e)) return i.AnnouncementsLockIcon;
                else return i.AnnouncementsIcon;
            }
            if (e.isNSFW()) return i.AnnouncementsWarningIcon;
            if ((0, c.Z)(e)) return i.AnnouncementsLockIcon;
            return i.AnnouncementsIcon;
        case f.d4z.GUILD_STORE:
            return i.TagIcon;
        case f.d4z.DM:
        case f.d4z.GROUP_DM:
            return i.AtIcon;
        case f.d4z.PRIVATE_THREAD:
            return i.ThreadLockIcon;
        case f.d4z.ANNOUNCEMENT_THREAD:
        case f.d4z.PUBLIC_THREAD:
            if (e.isNSFW()) return i.ThreadWarningIcon;
            if (e.isForumPost()) return i.ChatIcon;
            else return i.ThreadIcon;
        case f.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return i.TextControllerIcon;
            if (e.isNSFW()) return i.TextWarningIcon;
            if ((0, c.Z)(e)) return i.TextLockIcon;
            return i.TextIcon;
        case f.d4z.GUILD_FORUM:
            let v = e.isMediaChannel();
            if (e.isNSFW()) return v ? i.ImageWarningIcon : i.ForumWarningIcon;
            if ((0, c.Z)(e)) return v ? i.ImageLockIcon : i.ForumLockIcon;
            else return v ? i.ImageIcon : i.ForumIcon;
        case f.d4z.GUILD_MEDIA:
            if (e.isNSFW()) return i.ImageWarningIcon;
            if ((0, c.Z)(e)) return i.ImageLockIcon;
            else return i.ImageIcon;
        case f.d4z.GUILD_STAGE_VOICE:
            if (E) return (0, c.Z)(e) ? i.LockIcon : i.StageLockIcon;
            if (p) return i.LockIcon;
            if ((0, c.Z)(e)) return i.StageLockIcon;
            else return i.StageIcon;
        case f.d4z.GUILD_VOICE:
            if (g) return i.ChatIcon;
            if (e.isNSFW()) return i.VoiceWarningIcon;
            if (_) return i.ScreenArrowIcon;
            if (E) {
                if ((0, c.Z)(e)) return i.LockIcon;
                return h ? i.VideoLockIcon : i.VoiceLockIcon;
            }
            if (p) return i.LockIcon;
            if ((0, c.Z)(e)) return h ? i.VideoLockIcon : i.VoiceLockIcon;
            else return h ? i.VideoIcon : i.VoiceNormalIcon;
        case f.d4z.GUILD_DIRECTORY:
            return i.HubIcon;
        case f.d4z.GUILD_CATEGORY:
            return i.FolderIcon;
        default:
            if (d.EC.has(e.id)) {
                if (e.id === d.HY.GUILD_HOME || e.id === d.HY.SERVER_GUIDE) return i.SignPostIcon;
                if (e.id === d.HY.CHANNEL_BROWSER || e.id === d.HY.CUSTOMIZE_COMMUNITY) return i.ChannelListMagnifyingGlassIcon;
            }
            return null;
    }
}
function m(e) {
    switch (e) {
        case f.d4z.GUILD_ANNOUNCEMENT:
            return i.AnnouncementsIcon;
        case f.d4z.GUILD_STORE:
            return i.TagIcon;
        case f.d4z.DM:
        case f.d4z.GROUP_DM:
            return i.AtIcon;
        case f.d4z.PRIVATE_THREAD:
            return i.ThreadLockIcon;
        case f.d4z.ANNOUNCEMENT_THREAD:
        case f.d4z.PUBLIC_THREAD:
            return i.ThreadIcon;
        case f.d4z.GUILD_TEXT:
        case f.d4z.GUILD_FORUM:
        case f.d4z.GUILD_MEDIA:
            return i.TextIcon;
        case f.d4z.GUILD_STAGE_VOICE:
            return i.StageIcon;
        case f.d4z.GUILD_VOICE:
            return i.VoiceNormalIcon;
        case f.d4z.GUILD_CATEGORY:
            return i.FolderIcon;
        default:
            return null;
    }
}
