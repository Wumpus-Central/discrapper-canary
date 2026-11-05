var t = r(138134),
    l = r(622629),
    i = r(922288),
    a = r(986226),
    s = r(669281),
    c = r(778492),
    o = r(278416),
    h = r(935063),
    u = r(425557),
    I = r(176781),
    f = r(948428),
    d = r(534890),
    g = r(163328),
    A = r(24825),
    v = r(11779),
    p = r(446057),
    E = r(770880),
    L = r(276293),
    T = r(87221),
    m = r(781481),
    N = r(760911),
    C = r(107086),
    w = r(532590),
    D = r(597050),
    _ = r(191023),
    x = r(434831),
    R = r(56059),
    U = r(194261),
    M = r(808107),
    b = r(451394),
    V = r(512474),
    Z = r(445567),
    G = r(183623),
    O = r(844972),
    j = r(146151),
    S = r(428689),
    k = r(983851),
    y = r(101277),
    H = r(678708),
    F = r(367332),
    P = r(91166),
    B = r(901117),
    W = r(323384),
    Y = r(855473),
    J = r(740426),
    K = r(51758),
    Q = r(696451),
    X = r(71393),
    z = r(287809),
    q = r(148719),
    $ = r(746080),
    ee = r(652215),
    en = r(792996);
r.d(
    n,
    {},
    {
        Bq: function (e, n, r, t) {
            if (null == e) return null;
            if (e.id === n?.rulesChannelId) return en.intl.string(en.t["/7EhaT"]);
            let l = e.isNSFW();
            switch (e.type) {
                case ee.rbe.GUILD_TEXT:
                    if (null != e.linkedLobby) return en.intl.string(en.t.Lt3PAK);
                    if (t) return en.intl.string(en.t.LKpYbi);
                    if (l) return en.intl.string(en.t.vvASTb);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t["8QsJXA"]);
                    if ((0, q.A)(e)) return en.intl.string(en.t.jQ1plj);
                    return en.intl.string(en.t.t1yj0N);
                case ee.rbe.GUILD_FORUM:
                    let i = e.isMediaChannel(),
                        a = e.isGameInvitesChannel();
                    if (l) return i ? en.intl.string(en.t["pZ/fYa"]) : en.intl.string(en.t.ibmpPi);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t.TDGaxd);
                    if ((0, q.A)(e)) {
                        if (a) return en.intl.string(en.t.AwjsC9);
                        return i ? en.intl.string(en.t.gfVCfL) : en.intl.string(en.t.UbLM3J);
                    }
                    if (a) return en.intl.string(en.t.BW4VHV);
                    return i ? en.intl.string(en.t.seKITE) : en.intl.string(en.t["0sDXdm"]);
                case ee.rbe.GUILD_MEDIA:
                    if (l) return en.intl.string(en.t["pZ/fYa"]);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t.vjYxox);
                    if ((0, q.A)(e)) return en.intl.string(en.t.gfVCfL);
                    return en.intl.string(en.t.seKITE);
                case ee.rbe.GUILD_STAGE_VOICE:
                    if (r) return en.intl.string(en.t.ZjZB3r);
                    if ((0, q.A)(e)) return en.intl.string(en.t["7pRuCQ"]);
                    return en.intl.string(en.t.eJFSiN);
                case ee.rbe.GUILD_VOICE:
                    if (r) return en.intl.string(en.t.xY8Wth);
                    if (l) return en.intl.string(en.t.ajeTKN);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t.hGmOlP);
                    if ((0, q.A)(e)) return en.intl.string(en.t.qaY8Dm);
                    return en.intl.string(en.t["0kBmow"]);
                case ee.rbe.GUILD_ANNOUNCEMENT:
                    if (l) return en.intl.string(en.t.eRc6o9);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t["7F1TCC"]);
                    if ((0, q.A)(e)) return en.intl.string(en.t.EHLQwl);
                    return en.intl.string(en.t.GtDRi2);
                case ee.rbe.GUILD_STORE:
                    return en.intl.string(en.t.Ea4NDL);
                case ee.rbe.DM:
                    return en.intl.string(en.t.jN2DfZ);
                case ee.rbe.GROUP_DM:
                    return en.intl.string(en.t["e5y+gm"]);
                case ee.rbe.GUILD_DIRECTORY:
                    return en.intl.string(en.t.IzZTIe);
                case ee.rbe.PUBLIC_THREAD:
                case ee.rbe.ANNOUNCEMENT_THREAD:
                case ee.rbe.MEDIA_THREAD:
                    return en.intl.string(en.t["7Xm5QI"]);
                case ee.rbe.PRIVATE_THREAD:
                    return en.intl.string(en.t.F1zyvU);
                case ee.rbe.GUILD_APP:
                    if (l) return en.intl.string(en.t.zAEV11);
                    if (e.isSpoilerChannel()) return en.intl.string(en.t["HO/lY5"]);
                    if ((0, q.A)(e)) return en.intl.string(en.t.MpFE11);
                    return en.intl.string(en.t["A+8d6M"]);
                case ee.rbe.GUILD_CATEGORY:
                case ee.rbe.GUILD_SPACE:
                case ee.rbe.UNKNOWN:
                default:
                    return null;
            }
        },
        _U: function (e) {
            switch (e) {
                case ee.rbe.GUILD_ANNOUNCEMENT:
                    return c.AnnouncementsIcon;
                case ee.rbe.GUILD_STORE:
                    return o.TagIcon;
                case ee.rbe.DM:
                case ee.rbe.GROUP_DM:
                    return h.AtIcon;
                case ee.rbe.PRIVATE_THREAD:
                    return u.ThreadLockIcon;
                case ee.rbe.ANNOUNCEMENT_THREAD:
                case ee.rbe.PUBLIC_THREAD:
                case ee.rbe.MEDIA_THREAD:
                    return g.ThreadIcon;
                case ee.rbe.GUILD_TEXT:
                    return L.TextIcon;
                case ee.rbe.GUILD_FORUM:
                    return R.ForumIcon;
                case ee.rbe.GUILD_MEDIA:
                    return _.ImageIcon;
                case ee.rbe.GUILD_STAGE_VOICE:
                    return b.StageIcon;
                case ee.rbe.GUILD_VOICE:
                    return k.VoiceNormalIcon;
                case ee.rbe.GUILD_CATEGORY:
                    return H.FolderIcon;
                case ee.rbe.GUILD_DIRECTORY:
                    return y.HubIcon;
                case ee.rbe.GUILD_APP:
                    return W.AppsIcon;
                case ee.rbe.LOBBY:
                case ee.rbe.DM_SDK:
                case ee.rbe.GUILD_SPACE:
                case ee.rbe.UNKNOWN:
                default:
                    return null;
            }
        },
        gU: function (e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                {
                    locked: en = !1,
                    video: er = !1,
                    stream: et = !1,
                    hasActiveThreads: el = !1,
                    textFocused: ei = !1,
                } = r;
            if (null == e) return null;
            null == n && (n = X.A.getGuild(e.getGuildId()));
            let ea = (0, K.V)(n?.id, [X.A, z.default, Q.Ay]);
            if (e.isModeratorReportChannel()) return t.FlagIcon;
            if (e?.id === n?.rulesChannelId) return l.BookCheckIcon;
            let es = e.isNSFW();
            switch (e.type) {
                case ee.rbe.GUILD_ANNOUNCEMENT:
                    if (el)
                        if (es) return i.AnnouncementsWarningIcon;
                        else if (e.isSpoilerChannel()) return a.AnnouncementsSpoilerIcon;
                        else if ((0, q.A)(e)) return s.AnnouncementsLockIcon;
                        else return c.AnnouncementsIcon;
                    if (es) return i.AnnouncementsWarningIcon;
                    if (e.isSpoilerChannel()) return a.AnnouncementsSpoilerIcon;
                    if ((0, q.A)(e)) return s.AnnouncementsLockIcon;
                    return c.AnnouncementsIcon;
                case ee.rbe.GUILD_STORE:
                    return o.TagIcon;
                case ee.rbe.DM:
                case ee.rbe.GROUP_DM:
                    return h.AtIcon;
                case ee.rbe.PRIVATE_THREAD:
                    return u.ThreadLockIcon;
                case ee.rbe.MEDIA_THREAD:
                    return I.ClipsIcon;
                case ee.rbe.ANNOUNCEMENT_THREAD:
                case ee.rbe.PUBLIC_THREAD:
                    if (es) return f.ThreadWarningIcon;
                    if (e.isForumPost()) return d.ChatIcon;
                    return g.ThreadIcon;
                case ee.rbe.GUILD_TEXT:
                    if (null != e.linkedLobby) return A.TextControllerIcon;
                    if (es) return v.TextWarningIcon;
                    if (e.isSpoilerChannel()) return p.TextSpoilerIcon;
                    if ((0, q.A)(e)) return E.TextLockIcon;
                    return L.TextIcon;
                case ee.rbe.GUILD_FORUM:
                    let ec = e.isMediaChannel(),
                        eo = e.isGameInvitesChannel();
                    if (es) return ec ? T.ImageWarningIcon : m.ForumWarningIcon;
                    if (e.isSpoilerChannel()) return N.ForumSpoilerIcon;
                    if ((0, q.A)(e)) {
                        if (eo) return C.ExperimentalLfgLockIcon;
                        return ec ? w.ImageLockIcon : D.ForumLockIcon;
                    } else if (ec) return _.ImageIcon;
                    else if (eo) return x.ExperimentalLfgIcon;
                    else return R.ForumIcon;
                case ee.rbe.GUILD_MEDIA:
                    if (es) return T.ImageWarningIcon;
                    if (e.isSpoilerChannel()) return N.ForumSpoilerIcon;
                    if ((0, q.A)(e)) return w.ImageLockIcon;
                    else return _.ImageIcon;
                case ee.rbe.GUILD_STAGE_VOICE:
                    if (ea) return (0, q.A)(e) ? U.LockIcon : M.StageLockIcon;
                    if (en) return U.LockIcon;
                    if ((0, q.A)(e)) return M.StageLockIcon;
                    else return b.StageIcon;
                case ee.rbe.GUILD_VOICE:
                    if (ei) return d.ChatIcon;
                    if (es) return V.VoiceWarningIcon;
                    if (e.isSpoilerChannel()) return Z.VoiceNormalSpoilerIcon;
                    if (et) return G.ScreenArrowIcon;
                    if (ea)
                        if ((0, q.A)(e)) return U.LockIcon;
                        else return er ? O.VideoLockIcon : j.VoiceLockIcon;
                    if (en) return U.LockIcon;
                    if ((0, q.A)(e)) return er ? O.VideoLockIcon : j.VoiceLockIcon;
                    else return er ? S.VideoIcon : k.VoiceNormalIcon;
                case ee.rbe.GUILD_DIRECTORY:
                    return y.HubIcon;
                case ee.rbe.GUILD_CATEGORY:
                    return H.FolderIcon;
                case ee.rbe.GUILD_APP:
                    if (es) return F.AppsWarningIcon;
                    if (e.isSpoilerChannel()) return P.AppsSpoilerIcon;
                    if ((0, q.A)(e)) return B.AppsLockIcon;
                    else return W.AppsIcon;
                case ee.rbe.UNKNOWN:
                    if ($.aQ.has(e.id)) {
                        if (e.id === $.T4.GUILD_HOME || e.id === $.T4.SERVER_GUIDE) return Y.SignPostIcon;
                        else if (e.id === $.T4.CHANNEL_BROWSER || e.id === $.T4.CUSTOMIZE_COMMUNITY)
                            return J.ChannelListMagnifyingGlassIcon;
                    }
                    return null;
                case ee.rbe.GUILD_SPACE:
                default:
                    return null;
            }
        },
    },
);
