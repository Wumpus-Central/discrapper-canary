t.d(e, { Bq: () => la, _U: () => li, gU: () => ls });
var a = t(138134),
    s = t(622629),
    i = t(922288),
    r = t(986226),
    n = t(669281),
    c = t(778492),
    h = t(278416),
    o = t(935063),
    d = t(425557),
    v = t(176781),
    f = t(948428),
    g = t(534890),
    u = t(163328),
    A = t(24825),
    w = t(11779),
    p = t(446057),
    I = t(770880),
    N = t(276293),
    m = t(87221),
    x = t(781481),
    E = t(760911),
    T = t(107086),
    Z = t(532590),
    M = t(597050),
    C = t(191023),
    R = t(434831),
    _ = t(56059),
    L = t(194261),
    D = t(808107),
    j = t(451394),
    U = t(512474),
    V = t(445567),
    y = t(183623),
    b = t(844972),
    O = t(146151),
    H = t(428689),
    G = t(983851),
    F = t(101277),
    B = t(678708),
    J = t(367332),
    S = t(91166),
    P = t(901117),
    k = t(323384),
    Y = t(855473),
    X = t(740426),
    W = t(51758),
    K = t(681466),
    Q = t(696451),
    q = t(71393),
    z = t(287809),
    $ = t(148719),
    ll = t(746080),
    le = t(652215),
    lt = t(375708);
function la(l, e, t, a) {
    if (null == l) return null;
    if (l.id === e?.rulesChannelId) return lt.intl.string(lt.t["/7EhaT"]);
    let s = l.isNSFW();
    switch (l.type) {
        case le.rbe.GUILD_TEXT:
            let i = (0, K.a)(l, "getChannelIconTooltipText");
            if (null != i) return i;
            if (null != l.linkedLobby) return lt.intl.string(lt.t.Lt3PAK);
            if (a) return lt.intl.string(lt.t.LKpYbi);
            if (s) return lt.intl.string(lt.t.vvASTb);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t["8QsJXA"]);
            if ((0, $.A)(l)) return lt.intl.string(lt.t.jQ1plj);
            return lt.intl.string(lt.t.t1yj0N);
        case le.rbe.GUILD_FORUM:
            let r = l.isMediaChannel(),
                n = l.isGameInvitesChannel();
            if (s) return r ? lt.intl.string(lt.t["pZ/fYa"]) : lt.intl.string(lt.t.ibmpPi);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t.TDGaxd);
            if ((0, $.A)(l)) {
                if (n) return lt.intl.string(lt.t.AwjsC9);
                return r ? lt.intl.string(lt.t.gfVCfL) : lt.intl.string(lt.t.UbLM3J);
            }
            if (n) return lt.intl.string(lt.t.BW4VHV);
            return r ? lt.intl.string(lt.t.seKITE) : lt.intl.string(lt.t["0sDXdm"]);
        case le.rbe.GUILD_MEDIA:
            if (s) return lt.intl.string(lt.t["pZ/fYa"]);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t.vjYxox);
            if ((0, $.A)(l)) return lt.intl.string(lt.t.gfVCfL);
            return lt.intl.string(lt.t.seKITE);
        case le.rbe.GUILD_STAGE_VOICE:
            if (t) return lt.intl.string(lt.t.ZjZB3r);
            if ((0, $.A)(l)) return lt.intl.string(lt.t["7pRuCQ"]);
            return lt.intl.string(lt.t.eJFSiN);
        case le.rbe.GUILD_VOICE:
            if (t) return lt.intl.string(lt.t.xY8Wth);
            if (s) return lt.intl.string(lt.t.ajeTKN);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t.hGmOlP);
            if ((0, $.A)(l)) return lt.intl.string(lt.t.qaY8Dm);
            return lt.intl.string(lt.t["0kBmow"]);
        case le.rbe.GUILD_ANNOUNCEMENT:
            if (s) return lt.intl.string(lt.t.eRc6o9);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t["7F1TCC"]);
            if ((0, $.A)(l)) return lt.intl.string(lt.t.EHLQwl);
            return lt.intl.string(lt.t.GtDRi2);
        case le.rbe.GUILD_STORE:
            return lt.intl.string(lt.t.Ea4NDL);
        case le.rbe.DM:
            return lt.intl.string(lt.t.jN2DfZ);
        case le.rbe.GROUP_DM:
            return lt.intl.string(lt.t["e5y+gm"]);
        case le.rbe.GUILD_DIRECTORY:
            return lt.intl.string(lt.t.IzZTIe);
        case le.rbe.PUBLIC_THREAD:
        case le.rbe.ANNOUNCEMENT_THREAD:
        case le.rbe.MEDIA_THREAD:
            return lt.intl.string(lt.t["7Xm5QI"]);
        case le.rbe.PRIVATE_THREAD:
            return lt.intl.string(lt.t.F1zyvU);
        case le.rbe.GUILD_APP:
            if (s) return lt.intl.string(lt.t.zAEV11);
            if (l.isSpoilerChannel()) return lt.intl.string(lt.t["HO/lY5"]);
            if ((0, $.A)(l)) return lt.intl.string(lt.t.MpFE11);
            return lt.intl.string(lt.t["A+8d6M"]);
        case le.rbe.GUILD_CATEGORY:
        case le.rbe.GUILD_SPACE:
        case le.rbe.UNKNOWN:
        default:
            return null;
    }
}
function ls(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: lt = !1, video: la = !1, stream: ls = !1, hasActiveThreads: li = !1, textFocused: lr = !1 } = t;
    if (null == l) return null;
    null == e && (e = q.A.getGuild(l.getGuildId()));
    let ln = (0, W.V)(e?.id, [q.A, z.default, Q.Ay]);
    if (l.isModeratorReportChannel()) return a.FlagIcon;
    if (l?.id === e?.rulesChannelId) return s.B;
    let lc = l.isNSFW();
    switch (l.type) {
        case le.rbe.GUILD_ANNOUNCEMENT:
            if (li)
                if (lc) return i.M;
                else if (l.isSpoilerChannel()) return r.u;
                else if ((0, $.A)(l)) return n.X;
                else return c.k;
            if (lc) return i.M;
            if (l.isSpoilerChannel()) return r.u;
            if ((0, $.A)(l)) return n.X;
            return c.k;
        case le.rbe.GUILD_STORE:
            return h.TagIcon;
        case le.rbe.DM:
        case le.rbe.GROUP_DM:
            return o.X;
        case le.rbe.PRIVATE_THREAD:
            return d.t;
        case le.rbe.MEDIA_THREAD:
            return v.x;
        case le.rbe.ANNOUNCEMENT_THREAD:
        case le.rbe.PUBLIC_THREAD:
            if (lc) return f.m;
            if (l.isForumPost()) return g.ChatIcon;
            return u.y;
        case le.rbe.GUILD_TEXT:
            let lh = (0, K.A)(l, "getChannelIconComponent");
            if (null != lh) return lh;
            if (null != l.linkedLobby) return A.x;
            if (lc) return w.r;
            if (l.isSpoilerChannel()) return p.n;
            if ((0, $.A)(l)) return I.I;
            return N.N;
        case le.rbe.GUILD_FORUM:
            let lo = l.isMediaChannel(),
                ld = l.isGameInvitesChannel();
            if (lc) return lo ? m.D : x.f;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, $.A)(l)) {
                if (ld) return T.s;
                return lo ? Z.c : M.Q;
            } else if (lo) return C.ImageIcon;
            else if (ld) return R.t;
            else return _.b;
        case le.rbe.GUILD_MEDIA:
            if (lc) return m.D;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, $.A)(l)) return Z.c;
            else return C.ImageIcon;
        case le.rbe.GUILD_STAGE_VOICE:
            if (ln) return (0, $.A)(l) ? L.LockIcon : D.D;
            if (lt) return L.LockIcon;
            if ((0, $.A)(l)) return D.D;
            else return j.q;
        case le.rbe.GUILD_VOICE:
            if (lr) return g.ChatIcon;
            if (lc) return U.O;
            if (l.isSpoilerChannel()) return V.P;
            if (ls) return y.F;
            if (ln)
                if ((0, $.A)(l)) return L.LockIcon;
                else return la ? b.k : O.t;
            if (lt) return L.LockIcon;
            if ((0, $.A)(l)) return la ? b.k : O.t;
            else return la ? H.VideoIcon : G.H;
        case le.rbe.GUILD_DIRECTORY:
            return F.P;
        case le.rbe.GUILD_CATEGORY:
            return B.FolderIcon;
        case le.rbe.GUILD_APP:
            if (lc) return J.c;
            if (l.isSpoilerChannel()) return S.W;
            if ((0, $.A)(l)) return P.Z;
            else return k.k;
        case le.rbe.UNKNOWN:
            if (ll.aQ.has(l.id)) {
                if (l.id === ll.T4.GUILD_HOME || l.id === ll.T4.SERVER_GUIDE) return Y.Z;
                else if (l.id === ll.T4.CHANNEL_BROWSER || l.id === ll.T4.CUSTOMIZE_COMMUNITY) return X.k;
            }
            return null;
        case le.rbe.GUILD_SPACE:
        default:
            return null;
    }
}
function li(l) {
    switch (l) {
        case le.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case le.rbe.GUILD_STORE:
            return h.TagIcon;
        case le.rbe.DM:
        case le.rbe.GROUP_DM:
            return o.X;
        case le.rbe.PRIVATE_THREAD:
            return d.t;
        case le.rbe.ANNOUNCEMENT_THREAD:
        case le.rbe.PUBLIC_THREAD:
        case le.rbe.MEDIA_THREAD:
            return u.y;
        case le.rbe.GUILD_TEXT:
            return N.N;
        case le.rbe.GUILD_FORUM:
            return _.b;
        case le.rbe.GUILD_MEDIA:
            return C.ImageIcon;
        case le.rbe.GUILD_STAGE_VOICE:
            return j.q;
        case le.rbe.GUILD_VOICE:
            return G.H;
        case le.rbe.GUILD_CATEGORY:
            return B.FolderIcon;
        case le.rbe.GUILD_DIRECTORY:
            return F.P;
        case le.rbe.GUILD_APP:
            return k.k;
        case le.rbe.LOBBY:
        case le.rbe.DM_SDK:
        case le.rbe.GUILD_SPACE:
        case le.rbe.UNKNOWN:
        default:
            return null;
    }
}
