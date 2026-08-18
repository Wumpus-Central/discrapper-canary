l.d(t, { _U: () => ei, gU: () => en, Bq: () => el });
var n = l(138134),
    i = l(622629),
    r = l(922288),
    a = l(986226),
    s = l(669281),
    o = l(778492),
    c = l(278416),
    d = l(935063),
    u = l(425557),
    h = l(176781),
    E = l(948428),
    I = l(534890),
    _ = l(163328),
    T = l(24825),
    f = l(11779),
    A = l(446057),
    p = l(770880),
    g = l(276293),
    S = l(87221),
    v = l(781481),
    N = l(760911),
    L = l(107086),
    D = l(532590),
    m = l(597050),
    G = l(191023),
    R = l(434831),
    C = l(56059),
    U = l(194261),
    w = l(808107),
    y = l(451394),
    M = l(512474),
    x = l(445567),
    O = l(183623),
    b = l(844972),
    j = l(146151),
    V = l(428689),
    B = l(983851),
    P = l(101277),
    Z = l(678708),
    F = l(855473),
    H = l(740426),
    k = l(51758),
    W = l(901117),
    Y = l(323384),
    X = l(148719),
    J = l(683180),
    K = l(818085),
    Q = l(375708),
    $ = l(696451),
    q = l(71393),
    z = l(287809),
    ee = l(746080),
    et = l(652215);
function el(e, t, l, n) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return Q.intl.string(Q.t["/7EhaT"]);
    let i = e.isNSFW();
    switch (e.type) {
        case et.rbe.GUILD_TEXT:
            let r = null != e && (0, J.kg)(e, "getChannelIconTooltipText") ? Q.intl.string(K.default.yLw6Hg) : null;
            if (null != r) return r;
            if (null != e.linkedLobby) return Q.intl.string(Q.t.Lt3PAK);
            if (n) return Q.intl.string(Q.t.LKpYbi);
            if (i) return Q.intl.string(Q.t.vvASTb);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t["8QsJXA"]);
            if ((0, X.A)(e)) return Q.intl.string(Q.t.jQ1plj);
            return Q.intl.string(Q.t.t1yj0N);
        case et.rbe.GUILD_FORUM:
            let a = e.isMediaChannel(),
                s = e.isGameInvitesChannel();
            if (i) return a ? Q.intl.string(Q.t["pZ/fYa"]) : Q.intl.string(Q.t.ibmpPi);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t.TDGaxd);
            if ((0, X.A)(e)) {
                if (s) return Q.intl.string(Q.t.AwjsC9);
                return a ? Q.intl.string(Q.t.gfVCfL) : Q.intl.string(Q.t.UbLM3J);
            }
            if (s) return Q.intl.string(Q.t.BW4VHV);
            return a ? Q.intl.string(Q.t.seKITE) : Q.intl.string(Q.t["0sDXdm"]);
        case et.rbe.GUILD_MEDIA:
            if (i) return Q.intl.string(Q.t["pZ/fYa"]);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t.vjYxox);
            if ((0, X.A)(e)) return Q.intl.string(Q.t.gfVCfL);
            return Q.intl.string(Q.t.seKITE);
        case et.rbe.GUILD_STAGE_VOICE:
            if (l) return Q.intl.string(Q.t.ZjZB3r);
            if ((0, X.A)(e)) return Q.intl.string(Q.t["7pRuCQ"]);
            return Q.intl.string(Q.t.eJFSiN);
        case et.rbe.GUILD_VOICE:
            if (l) return Q.intl.string(Q.t.xY8Wth);
            if (i) return Q.intl.string(Q.t.ajeTKN);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t.hGmOlP);
            if ((0, X.A)(e)) return Q.intl.string(Q.t.qaY8Dm);
            return Q.intl.string(Q.t["0kBmow"]);
        case et.rbe.GUILD_ANNOUNCEMENT:
            if (i) return Q.intl.string(Q.t.eRc6o9);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t["7F1TCC"]);
            if ((0, X.A)(e)) return Q.intl.string(Q.t.EHLQwl);
            return Q.intl.string(Q.t.GtDRi2);
        case et.rbe.GUILD_STORE:
            return Q.intl.string(Q.t.Ea4NDL);
        case et.rbe.DM:
            return Q.intl.string(Q.t.jN2DfZ);
        case et.rbe.GROUP_DM:
            return Q.intl.string(Q.t["e5y+gm"]);
        case et.rbe.GUILD_DIRECTORY:
            return Q.intl.string(Q.t.IzZTIe);
        case et.rbe.PUBLIC_THREAD:
            return Q.intl.string(Q.t["7Xm5QI"]);
        case et.rbe.PRIVATE_THREAD:
            return Q.intl.string(Q.t.F1zyvU);
        default:
            return null;
    }
}
function en(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: K = !1, video: Q = !1, stream: el = !1, hasActiveThreads: en = !1, textFocused: ei = !1 } = l;
    if (null == e) return null;
    null == t && (t = q.A.getGuild(e.getGuildId()));
    let er = (0, k.V)(t?.id, [q.A, z.default, $.Ay]);
    if (e.isModeratorReportChannel()) return n.FlagIcon;
    if (e?.id === t?.rulesChannelId) return i.B;
    let ea = e.isNSFW();
    switch (e.type) {
        case et.rbe.GUILD_ANNOUNCEMENT:
            if (en)
                if (ea) return r.M;
                else if (e.isSpoilerChannel()) return a.u;
                else if ((0, X.A)(e)) return s.X;
                else return o.k;
            if (ea) return r.M;
            if (e.isSpoilerChannel()) return a.u;
            if ((0, X.A)(e)) return s.X;
            return o.k;
        case et.rbe.GUILD_STORE:
            return c.TagIcon;
        case et.rbe.DM:
        case et.rbe.GROUP_DM:
            return d.X;
        case et.rbe.PRIVATE_THREAD:
            return u.t;
        case et.rbe.MEDIA_THREAD:
            return h.x;
        case et.rbe.ANNOUNCEMENT_THREAD:
        case et.rbe.PUBLIC_THREAD:
            if (ea) return E.m;
            if (e.isForumPost()) return I.ChatIcon;
            return _.y;
        case et.rbe.GUILD_TEXT:
            let es = null != e && (0, J.kg)(e, "getChannelIconComponent") ? ((0, X.A)(e) ? W.Z : Y.k) : null;
            if (null != es) return es;
            if (null != e.linkedLobby) return T.x;
            if (ea) return f.r;
            if (e.isSpoilerChannel()) return A.n;
            if ((0, X.A)(e)) return p.I;
            return g.N;
        case et.rbe.GUILD_FORUM:
            let eo = e.isMediaChannel(),
                ec = e.isGameInvitesChannel();
            if (ea) return eo ? S.D : v.f;
            if (e.isSpoilerChannel()) return N.H;
            if ((0, X.A)(e)) {
                if (ec) return L.s;
                return eo ? D.c : m.Q;
            } else if (eo) return G.ImageIcon;
            else if (ec) return R.t;
            else return C.b;
        case et.rbe.GUILD_MEDIA:
            if (ea) return S.D;
            if (e.isSpoilerChannel()) return N.H;
            if ((0, X.A)(e)) return D.c;
            else return G.ImageIcon;
        case et.rbe.GUILD_STAGE_VOICE:
            if (er) return (0, X.A)(e) ? U.LockIcon : w.D;
            if (K) return U.LockIcon;
            if ((0, X.A)(e)) return w.D;
            else return y.q;
        case et.rbe.GUILD_VOICE:
            if (ei) return I.ChatIcon;
            if (ea) return M.O;
            if (e.isSpoilerChannel()) return x.P;
            if (el) return O.F;
            if (er)
                if ((0, X.A)(e)) return U.LockIcon;
                else return Q ? b.k : j.t;
            if (K) return U.LockIcon;
            if ((0, X.A)(e)) return Q ? b.k : j.t;
            else return Q ? V.VideoIcon : B.H;
        case et.rbe.GUILD_DIRECTORY:
            return P.P;
        case et.rbe.GUILD_CATEGORY:
            return Z.FolderIcon;
        default:
            if (ee.aQ.has(e.id)) {
                if (e.id === ee.T4.GUILD_HOME || e.id === ee.T4.SERVER_GUIDE) return F.Z;
                else if (e.id === ee.T4.CHANNEL_BROWSER || e.id === ee.T4.CUSTOMIZE_COMMUNITY) return H.k;
            }
            return null;
    }
}
function ei(e) {
    switch (e) {
        case et.rbe.GUILD_ANNOUNCEMENT:
            return o.k;
        case et.rbe.GUILD_STORE:
            return c.TagIcon;
        case et.rbe.DM:
        case et.rbe.GROUP_DM:
            return d.X;
        case et.rbe.PRIVATE_THREAD:
            return u.t;
        case et.rbe.ANNOUNCEMENT_THREAD:
        case et.rbe.PUBLIC_THREAD:
            return _.y;
        case et.rbe.GUILD_TEXT:
            return g.N;
        case et.rbe.GUILD_FORUM:
            return C.b;
        case et.rbe.GUILD_MEDIA:
            return G.ImageIcon;
        case et.rbe.GUILD_STAGE_VOICE:
            return y.q;
        case et.rbe.GUILD_VOICE:
            return B.H;
        case et.rbe.GUILD_CATEGORY:
            return Z.FolderIcon;
        default:
            return null;
    }
}
