r.d(t, { Bq: () => er, _U: () => en, gU: () => el });
var l = r(138134),
    n = r(622629),
    i = r(922288),
    s = r(986226),
    a = r(669281),
    c = r(778492),
    h = r(278416),
    u = r(935063),
    o = r(425557),
    f = r(176781),
    d = r(948428),
    g = r(534890),
    v = r(163328),
    A = r(24825),
    I = r(11779),
    E = r(446057),
    p = r(770880),
    N = r(276293),
    w = r(87221),
    T = r(781481),
    D = r(760911),
    C = r(107086),
    _ = r(532590),
    m = r(597050),
    L = r(191023),
    R = r(434831),
    M = r(56059),
    U = r(194261),
    x = r(808107),
    b = r(451394),
    Z = r(512474),
    G = r(445567),
    V = r(183623),
    O = r(844972),
    j = r(146151),
    y = r(428689),
    H = r(983851),
    S = r(101277),
    F = r(678708),
    P = r(367332),
    B = r(91166),
    k = r(901117),
    J = r(323384),
    Y = r(855473),
    X = r(740426),
    K = r(51758),
    W = r(696451),
    Q = r(71393),
    q = r(287809),
    z = r(148719),
    $ = r(746080),
    ee = r(652215),
    et = r(375708);
function er(e, t, r, l) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return et.intl.string(et.t["/7EhaT"]);
    let n = e.isNSFW();
    switch (e.type) {
        case ee.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return et.intl.string(et.t.Lt3PAK);
            if (l) return et.intl.string(et.t.LKpYbi);
            if (n) return et.intl.string(et.t.vvASTb);
            if (e.isSpoilerChannel()) return et.intl.string(et.t["8QsJXA"]);
            if ((0, z.A)(e)) return et.intl.string(et.t.jQ1plj);
            return et.intl.string(et.t.t1yj0N);
        case ee.rbe.GUILD_FORUM:
            let i = e.isMediaChannel(),
                s = e.isGameInvitesChannel();
            if (n) return i ? et.intl.string(et.t["pZ/fYa"]) : et.intl.string(et.t.ibmpPi);
            if (e.isSpoilerChannel()) return et.intl.string(et.t.TDGaxd);
            if ((0, z.A)(e)) {
                if (s) return et.intl.string(et.t.AwjsC9);
                return i ? et.intl.string(et.t.gfVCfL) : et.intl.string(et.t.UbLM3J);
            }
            if (s) return et.intl.string(et.t.BW4VHV);
            return i ? et.intl.string(et.t.seKITE) : et.intl.string(et.t["0sDXdm"]);
        case ee.rbe.GUILD_MEDIA:
            if (n) return et.intl.string(et.t["pZ/fYa"]);
            if (e.isSpoilerChannel()) return et.intl.string(et.t.vjYxox);
            if ((0, z.A)(e)) return et.intl.string(et.t.gfVCfL);
            return et.intl.string(et.t.seKITE);
        case ee.rbe.GUILD_STAGE_VOICE:
            if (r) return et.intl.string(et.t.ZjZB3r);
            if ((0, z.A)(e)) return et.intl.string(et.t["7pRuCQ"]);
            return et.intl.string(et.t.eJFSiN);
        case ee.rbe.GUILD_VOICE:
            if (r) return et.intl.string(et.t.xY8Wth);
            if (n) return et.intl.string(et.t.ajeTKN);
            if (e.isSpoilerChannel()) return et.intl.string(et.t.hGmOlP);
            if ((0, z.A)(e)) return et.intl.string(et.t.qaY8Dm);
            return et.intl.string(et.t["0kBmow"]);
        case ee.rbe.GUILD_ANNOUNCEMENT:
            if (n) return et.intl.string(et.t.eRc6o9);
            if (e.isSpoilerChannel()) return et.intl.string(et.t["7F1TCC"]);
            if ((0, z.A)(e)) return et.intl.string(et.t.EHLQwl);
            return et.intl.string(et.t.GtDRi2);
        case ee.rbe.GUILD_STORE:
            return et.intl.string(et.t.Ea4NDL);
        case ee.rbe.DM:
            return et.intl.string(et.t.jN2DfZ);
        case ee.rbe.GROUP_DM:
            return et.intl.string(et.t["e5y+gm"]);
        case ee.rbe.GUILD_DIRECTORY:
            return et.intl.string(et.t.IzZTIe);
        case ee.rbe.PUBLIC_THREAD:
        case ee.rbe.ANNOUNCEMENT_THREAD:
        case ee.rbe.MEDIA_THREAD:
            return et.intl.string(et.t["7Xm5QI"]);
        case ee.rbe.PRIVATE_THREAD:
            return et.intl.string(et.t.F1zyvU);
        case ee.rbe.GUILD_APP:
            if (n) return et.intl.string(et.t.zAEV11);
            if (e.isSpoilerChannel()) return et.intl.string(et.t["HO/lY5"]);
            if ((0, z.A)(e)) return et.intl.string(et.t.MpFE11);
            return et.intl.string(et.t["A+8d6M"]);
        case ee.rbe.GUILD_CATEGORY:
        case ee.rbe.GUILD_SPACE:
        case ee.rbe.UNKNOWN:
        default:
            return null;
    }
}
function el(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: et = !1, video: er = !1, stream: el = !1, hasActiveThreads: en = !1, textFocused: ei = !1 } = r;
    if (null == e) return null;
    null == t && (t = Q.A.getGuild(e.getGuildId()));
    let es = (0, K.V)(t?.id, [Q.A, q.default, W.Ay]);
    if (e.isModeratorReportChannel()) return l.FlagIcon;
    if (e?.id === t?.rulesChannelId) return n.B;
    let ea = e.isNSFW();
    switch (e.type) {
        case ee.rbe.GUILD_ANNOUNCEMENT:
            if (en)
                if (ea) return i.M;
                else if (e.isSpoilerChannel()) return s.u;
                else if ((0, z.A)(e)) return a.X;
                else return c.k;
            if (ea) return i.M;
            if (e.isSpoilerChannel()) return s.u;
            if ((0, z.A)(e)) return a.X;
            return c.k;
        case ee.rbe.GUILD_STORE:
            return h.TagIcon;
        case ee.rbe.DM:
        case ee.rbe.GROUP_DM:
            return u.X;
        case ee.rbe.PRIVATE_THREAD:
            return o.t;
        case ee.rbe.MEDIA_THREAD:
            return f.x;
        case ee.rbe.ANNOUNCEMENT_THREAD:
        case ee.rbe.PUBLIC_THREAD:
            if (ea) return d.m;
            if (e.isForumPost()) return g.ChatIcon;
            return v.y;
        case ee.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return A.x;
            if (ea) return I.r;
            if (e.isSpoilerChannel()) return E.n;
            if ((0, z.A)(e)) return p.I;
            return N.N;
        case ee.rbe.GUILD_FORUM:
            let ec = e.isMediaChannel(),
                eh = e.isGameInvitesChannel();
            if (ea) return ec ? w.D : T.f;
            if (e.isSpoilerChannel()) return D.H;
            if ((0, z.A)(e)) {
                if (eh) return C.s;
                return ec ? _.c : m.Q;
            } else if (ec) return L.ImageIcon;
            else if (eh) return R.t;
            else return M.b;
        case ee.rbe.GUILD_MEDIA:
            if (ea) return w.D;
            if (e.isSpoilerChannel()) return D.H;
            if ((0, z.A)(e)) return _.c;
            else return L.ImageIcon;
        case ee.rbe.GUILD_STAGE_VOICE:
            if (es) return (0, z.A)(e) ? U.LockIcon : x.D;
            if (et) return U.LockIcon;
            if ((0, z.A)(e)) return x.D;
            else return b.q;
        case ee.rbe.GUILD_VOICE:
            if (ei) return g.ChatIcon;
            if (ea) return Z.O;
            if (e.isSpoilerChannel()) return G.P;
            if (el) return V.F;
            if (es)
                if ((0, z.A)(e)) return U.LockIcon;
                else return er ? O.k : j.t;
            if (et) return U.LockIcon;
            if ((0, z.A)(e)) return er ? O.k : j.t;
            else return er ? y.VideoIcon : H.H;
        case ee.rbe.GUILD_DIRECTORY:
            return S.P;
        case ee.rbe.GUILD_CATEGORY:
            return F.FolderIcon;
        case ee.rbe.GUILD_APP:
            if (ea) return P.c;
            if (e.isSpoilerChannel()) return B.W;
            if ((0, z.A)(e)) return k.Z;
            else return J.k;
        case ee.rbe.UNKNOWN:
            if ($.aQ.has(e.id)) {
                if (e.id === $.T4.GUILD_HOME || e.id === $.T4.SERVER_GUIDE) return Y.Z;
                else if (e.id === $.T4.CHANNEL_BROWSER || e.id === $.T4.CUSTOMIZE_COMMUNITY) return X.k;
            }
            return null;
        case ee.rbe.GUILD_SPACE:
        default:
            return null;
    }
}
function en(e) {
    switch (e) {
        case ee.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case ee.rbe.GUILD_STORE:
            return h.TagIcon;
        case ee.rbe.DM:
        case ee.rbe.GROUP_DM:
            return u.X;
        case ee.rbe.PRIVATE_THREAD:
            return o.t;
        case ee.rbe.ANNOUNCEMENT_THREAD:
        case ee.rbe.PUBLIC_THREAD:
        case ee.rbe.MEDIA_THREAD:
            return v.y;
        case ee.rbe.GUILD_TEXT:
            return N.N;
        case ee.rbe.GUILD_FORUM:
            return M.b;
        case ee.rbe.GUILD_MEDIA:
            return L.ImageIcon;
        case ee.rbe.GUILD_STAGE_VOICE:
            return b.q;
        case ee.rbe.GUILD_VOICE:
            return H.H;
        case ee.rbe.GUILD_CATEGORY:
            return F.FolderIcon;
        case ee.rbe.GUILD_DIRECTORY:
            return S.P;
        case ee.rbe.GUILD_APP:
            return J.k;
        case ee.rbe.LOBBY:
        case ee.rbe.DM_SDK:
        case ee.rbe.GUILD_SPACE:
        case ee.rbe.UNKNOWN:
        default:
            return null;
    }
}
