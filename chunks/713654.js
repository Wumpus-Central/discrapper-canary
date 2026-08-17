t.d(e, { Bq: () => $, _U: () => le, gU: () => ll });
var s = t(138134),
    a = t(622629),
    i = t(922288),
    n = t(986226),
    r = t(669281),
    c = t(778492),
    h = t(278416),
    o = t(935063),
    d = t(425557),
    v = t(176781),
    f = t(948428),
    g = t(534890),
    u = t(163328),
    w = t(24825),
    p = t(11779),
    A = t(446057),
    I = t(770880),
    m = t(276293),
    x = t(87221),
    N = t(781481),
    E = t(760911),
    T = t(107086),
    Z = t(532590),
    M = t(597050),
    C = t(191023),
    R = t(434831),
    _ = t(56059),
    L = t(194261),
    j = t(808107),
    D = t(451394),
    V = t(512474),
    U = t(445567),
    y = t(183623),
    O = t(844972),
    H = t(146151),
    b = t(428689),
    F = t(983851),
    G = t(101277),
    B = t(678708),
    J = t(855473),
    S = t(740426),
    k = t(51758),
    P = t(681466),
    Y = t(696451),
    X = t(71393),
    Q = t(287809),
    K = t(148719),
    W = t(746080),
    q = t(652215),
    z = t(375708);
function $(l, e, t, s) {
    if (null == l) return null;
    if (l.id === e?.rulesChannelId) return z.intl.string(z.t["/7EhaT"]);
    let a = l.isNSFW();
    switch (l.type) {
        case q.rbe.GUILD_TEXT:
            let i = (0, P.a)(l, "getChannelIconTooltipText");
            if (null != i) return i;
            if (null != l.linkedLobby) return z.intl.string(z.t.Lt3PAK);
            if (s) return z.intl.string(z.t.LKpYbi);
            if (a) return z.intl.string(z.t.vvASTb);
            if (l.isSpoilerChannel()) return z.intl.string(z.t["8QsJXA"]);
            if ((0, K.A)(l)) return z.intl.string(z.t.jQ1plj);
            return z.intl.string(z.t.t1yj0N);
        case q.rbe.GUILD_FORUM:
            let n = l.isMediaChannel(),
                r = l.isGameInvitesChannel();
            if (a) return n ? z.intl.string(z.t["pZ/fYa"]) : z.intl.string(z.t.ibmpPi);
            if (l.isSpoilerChannel()) return z.intl.string(z.t.TDGaxd);
            if ((0, K.A)(l)) {
                if (r) return z.intl.string(z.t.AwjsC9);
                return n ? z.intl.string(z.t.gfVCfL) : z.intl.string(z.t.UbLM3J);
            }
            if (r) return z.intl.string(z.t.BW4VHV);
            return n ? z.intl.string(z.t.seKITE) : z.intl.string(z.t["0sDXdm"]);
        case q.rbe.GUILD_MEDIA:
            if (a) return z.intl.string(z.t["pZ/fYa"]);
            if (l.isSpoilerChannel()) return z.intl.string(z.t.vjYxox);
            if ((0, K.A)(l)) return z.intl.string(z.t.gfVCfL);
            return z.intl.string(z.t.seKITE);
        case q.rbe.GUILD_STAGE_VOICE:
            if (t) return z.intl.string(z.t.ZjZB3r);
            if ((0, K.A)(l)) return z.intl.string(z.t["7pRuCQ"]);
            return z.intl.string(z.t.eJFSiN);
        case q.rbe.GUILD_VOICE:
            if (t) return z.intl.string(z.t.xY8Wth);
            if (a) return z.intl.string(z.t.ajeTKN);
            if (l.isSpoilerChannel()) return z.intl.string(z.t.hGmOlP);
            if ((0, K.A)(l)) return z.intl.string(z.t.qaY8Dm);
            return z.intl.string(z.t["0kBmow"]);
        case q.rbe.GUILD_ANNOUNCEMENT:
            if (a) return z.intl.string(z.t.eRc6o9);
            if (l.isSpoilerChannel()) return z.intl.string(z.t["7F1TCC"]);
            if ((0, K.A)(l)) return z.intl.string(z.t.EHLQwl);
            return z.intl.string(z.t.GtDRi2);
        case q.rbe.GUILD_STORE:
            return z.intl.string(z.t.Ea4NDL);
        case q.rbe.DM:
            return z.intl.string(z.t.jN2DfZ);
        case q.rbe.GROUP_DM:
            return z.intl.string(z.t["e5y+gm"]);
        case q.rbe.GUILD_DIRECTORY:
            return z.intl.string(z.t.IzZTIe);
        case q.rbe.PUBLIC_THREAD:
            return z.intl.string(z.t["7Xm5QI"]);
        case q.rbe.PRIVATE_THREAD:
            return z.intl.string(z.t.F1zyvU);
        default:
            return null;
    }
}
function ll(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: z = !1, video: $ = !1, stream: ll = !1, hasActiveThreads: le = !1, textFocused: lt = !1 } = t;
    if (null == l) return null;
    null == e && (e = X.A.getGuild(l.getGuildId()));
    let ls = (0, k.V)(e?.id, [X.A, Q.default, Y.Ay]);
    if (l.isModeratorReportChannel()) return s.FlagIcon;
    if (l?.id === e?.rulesChannelId) return a.B;
    let la = l.isNSFW();
    switch (l.type) {
        case q.rbe.GUILD_ANNOUNCEMENT:
            if (le)
                if (la) return i.M;
                else if (l.isSpoilerChannel()) return n.u;
                else if ((0, K.A)(l)) return r.X;
                else return c.k;
            if (la) return i.M;
            if (l.isSpoilerChannel()) return n.u;
            if ((0, K.A)(l)) return r.X;
            return c.k;
        case q.rbe.GUILD_STORE:
            return h.TagIcon;
        case q.rbe.DM:
        case q.rbe.GROUP_DM:
            return o.X;
        case q.rbe.PRIVATE_THREAD:
            return d.t;
        case q.rbe.MEDIA_THREAD:
            return v.x;
        case q.rbe.ANNOUNCEMENT_THREAD:
        case q.rbe.PUBLIC_THREAD:
            if (la) return f.m;
            if (l.isForumPost()) return g.ChatIcon;
            return u.y;
        case q.rbe.GUILD_TEXT:
            let li = (0, P.A)(l, "getChannelIconComponent");
            if (null != li) return li;
            if (null != l.linkedLobby) return w.x;
            if (la) return p.r;
            if (l.isSpoilerChannel()) return A.n;
            if ((0, K.A)(l)) return I.I;
            return m.N;
        case q.rbe.GUILD_FORUM:
            let ln = l.isMediaChannel(),
                lr = l.isGameInvitesChannel();
            if (la) return ln ? x.D : N.f;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, K.A)(l)) {
                if (lr) return T.s;
                return ln ? Z.c : M.Q;
            } else if (ln) return C.ImageIcon;
            else if (lr) return R.t;
            else return _.b;
        case q.rbe.GUILD_MEDIA:
            if (la) return x.D;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, K.A)(l)) return Z.c;
            else return C.ImageIcon;
        case q.rbe.GUILD_STAGE_VOICE:
            if (ls) return (0, K.A)(l) ? L.LockIcon : j.D;
            if (z) return L.LockIcon;
            if ((0, K.A)(l)) return j.D;
            else return D.q;
        case q.rbe.GUILD_VOICE:
            if (lt) return g.ChatIcon;
            if (la) return V.O;
            if (l.isSpoilerChannel()) return U.P;
            if (ll) return y.F;
            if (ls)
                if ((0, K.A)(l)) return L.LockIcon;
                else return $ ? O.k : H.t;
            if (z) return L.LockIcon;
            if ((0, K.A)(l)) return $ ? O.k : H.t;
            else return $ ? b.VideoIcon : F.H;
        case q.rbe.GUILD_DIRECTORY:
            return G.P;
        case q.rbe.GUILD_CATEGORY:
            return B.FolderIcon;
        default:
            if (W.aQ.has(l.id)) {
                if (l.id === W.T4.GUILD_HOME || l.id === W.T4.SERVER_GUIDE) return J.Z;
                else if (l.id === W.T4.CHANNEL_BROWSER || l.id === W.T4.CUSTOMIZE_COMMUNITY) return S.k;
            }
            return null;
    }
}
function le(l) {
    switch (l) {
        case q.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case q.rbe.GUILD_STORE:
            return h.TagIcon;
        case q.rbe.DM:
        case q.rbe.GROUP_DM:
            return o.X;
        case q.rbe.PRIVATE_THREAD:
            return d.t;
        case q.rbe.ANNOUNCEMENT_THREAD:
        case q.rbe.PUBLIC_THREAD:
            return u.y;
        case q.rbe.GUILD_TEXT:
            return m.N;
        case q.rbe.GUILD_FORUM:
            return _.b;
        case q.rbe.GUILD_MEDIA:
            return C.ImageIcon;
        case q.rbe.GUILD_STAGE_VOICE:
            return D.q;
        case q.rbe.GUILD_VOICE:
            return F.H;
        case q.rbe.GUILD_CATEGORY:
            return B.FolderIcon;
        default:
            return null;
    }
}
