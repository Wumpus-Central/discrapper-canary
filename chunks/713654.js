t.d(e, { Bq: () => z, _U: () => ll, gU: () => $ });
var s = t(138134),
    a = t(622629),
    i = t(922288),
    r = t(986226),
    n = t(669281),
    c = t(778492),
    h = t(278416),
    d = t(935063),
    o = t(425557),
    v = t(176781),
    f = t(948428),
    g = t(534890),
    u = t(163328),
    w = t(24825),
    p = t(11779),
    A = t(446057),
    x = t(770880),
    m = t(276293),
    N = t(87221),
    I = t(781481),
    E = t(760911),
    T = t(107086),
    Z = t(532590),
    M = t(597050),
    R = t(191023),
    C = t(434831),
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
    G = t(983851),
    B = t(101277),
    F = t(678708),
    J = t(855473),
    S = t(740426),
    k = t(51758),
    P = t(696451),
    X = t(71393),
    Y = t(287809),
    Q = t(148719),
    K = t(746080),
    W = t(652215),
    q = t(375708);
function z(l, e, t, s) {
    if (null == l) return null;
    if (l.id === e?.rulesChannelId) return q.intl.string(q.t["/7EhaT"]);
    let a = l.isNSFW();
    switch (l.type) {
        case W.rbe.GUILD_TEXT:
            if (null != l.linkedLobby) return q.intl.string(q.t.Lt3PAK);
            if (s) return q.intl.string(q.t.LKpYbi);
            if (a) return q.intl.string(q.t.vvASTb);
            if (l.isSpoilerChannel()) return q.intl.string(q.t["8QsJXA"]);
            if ((0, Q.A)(l)) return q.intl.string(q.t.jQ1plj);
            return q.intl.string(q.t.t1yj0N);
        case W.rbe.GUILD_FORUM:
            let i = l.isMediaChannel(),
                r = l.isGameInvitesChannel();
            if (a) return i ? q.intl.string(q.t["pZ/fYa"]) : q.intl.string(q.t.ibmpPi);
            if (l.isSpoilerChannel()) return q.intl.string(q.t.TDGaxd);
            if ((0, Q.A)(l)) {
                if (r) return q.intl.string(q.t.AwjsC9);
                return i ? q.intl.string(q.t.gfVCfL) : q.intl.string(q.t.UbLM3J);
            }
            if (r) return q.intl.string(q.t.BW4VHV);
            return i ? q.intl.string(q.t.seKITE) : q.intl.string(q.t["0sDXdm"]);
        case W.rbe.GUILD_MEDIA:
            if (a) return q.intl.string(q.t["pZ/fYa"]);
            if (l.isSpoilerChannel()) return q.intl.string(q.t.vjYxox);
            if ((0, Q.A)(l)) return q.intl.string(q.t.gfVCfL);
            return q.intl.string(q.t.seKITE);
        case W.rbe.GUILD_STAGE_VOICE:
            if (t) return q.intl.string(q.t.ZjZB3r);
            if ((0, Q.A)(l)) return q.intl.string(q.t["7pRuCQ"]);
            return q.intl.string(q.t.eJFSiN);
        case W.rbe.GUILD_VOICE:
            if (t) return q.intl.string(q.t.xY8Wth);
            if (a) return q.intl.string(q.t.ajeTKN);
            if (l.isSpoilerChannel()) return q.intl.string(q.t.hGmOlP);
            if ((0, Q.A)(l)) return q.intl.string(q.t.qaY8Dm);
            return q.intl.string(q.t["0kBmow"]);
        case W.rbe.GUILD_ANNOUNCEMENT:
            if (a) return q.intl.string(q.t.eRc6o9);
            if (l.isSpoilerChannel()) return q.intl.string(q.t["7F1TCC"]);
            if ((0, Q.A)(l)) return q.intl.string(q.t.EHLQwl);
            return q.intl.string(q.t.GtDRi2);
        case W.rbe.GUILD_STORE:
            return q.intl.string(q.t.Ea4NDL);
        case W.rbe.DM:
            return q.intl.string(q.t.jN2DfZ);
        case W.rbe.GROUP_DM:
            return q.intl.string(q.t["e5y+gm"]);
        case W.rbe.GUILD_DIRECTORY:
            return q.intl.string(q.t.IzZTIe);
        case W.rbe.PUBLIC_THREAD:
            return q.intl.string(q.t["7Xm5QI"]);
        case W.rbe.PRIVATE_THREAD:
            return q.intl.string(q.t.F1zyvU);
        default:
            return null;
    }
}
function $(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: q = !1, video: z = !1, stream: $ = !1, hasActiveThreads: ll = !1, textFocused: le = !1 } = t;
    if (null == l) return null;
    null == e && (e = X.A.getGuild(l.getGuildId()));
    let lt = (0, k.V)(e?.id, [X.A, Y.default, P.Ay]);
    if (l.isModeratorReportChannel()) return s.i;
    if (l?.id === e?.rulesChannelId) return a.B;
    let ls = l.isNSFW();
    switch (l.type) {
        case W.rbe.GUILD_ANNOUNCEMENT:
            if (ll)
                if (ls) return i.M;
                else if (l.isSpoilerChannel()) return r.u;
                else if ((0, Q.A)(l)) return n.X;
                else return c.k;
            if (ls) return i.M;
            if (l.isSpoilerChannel()) return r.u;
            if ((0, Q.A)(l)) return n.X;
            return c.k;
        case W.rbe.GUILD_STORE:
            return h.g;
        case W.rbe.DM:
        case W.rbe.GROUP_DM:
            return d.X;
        case W.rbe.PRIVATE_THREAD:
            return o.t;
        case W.rbe.MEDIA_THREAD:
            return v.x;
        case W.rbe.ANNOUNCEMENT_THREAD:
        case W.rbe.PUBLIC_THREAD:
            if (ls) return f.m;
            if (l.isForumPost()) return g.o;
            return u.y;
        case W.rbe.GUILD_TEXT:
            if (null != l.linkedLobby) return w.x;
            if (ls) return p.r;
            if (l.isSpoilerChannel()) return A.n;
            if ((0, Q.A)(l)) return x.I;
            return m.N;
        case W.rbe.GUILD_FORUM:
            let la = l.isMediaChannel(),
                li = l.isGameInvitesChannel();
            if (ls) return la ? N.D : I.f;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, Q.A)(l)) {
                if (li) return T.s;
                return la ? Z.c : M.Q;
            } else if (la) return R.x;
            else if (li) return C.t;
            else return _.b;
        case W.rbe.GUILD_MEDIA:
            if (ls) return N.D;
            if (l.isSpoilerChannel()) return E.H;
            if ((0, Q.A)(l)) return Z.c;
            else return R.x;
        case W.rbe.GUILD_STAGE_VOICE:
            if (lt) return (0, Q.A)(l) ? L.X : j.D;
            if (q) return L.X;
            if ((0, Q.A)(l)) return j.D;
            else return D.q;
        case W.rbe.GUILD_VOICE:
            if (le) return g.o;
            if (ls) return V.O;
            if (l.isSpoilerChannel()) return U.P;
            if ($) return y.F;
            if (lt)
                if ((0, Q.A)(l)) return L.X;
                else return z ? O.k : H.t;
            if (q) return L.X;
            if ((0, Q.A)(l)) return z ? O.k : H.t;
            else return z ? b.n : G.H;
        case W.rbe.GUILD_DIRECTORY:
            return B.P;
        case W.rbe.GUILD_CATEGORY:
            return F.s;
        default:
            if (K.aQ.has(l.id)) {
                if (l.id === K.T4.GUILD_HOME || l.id === K.T4.SERVER_GUIDE) return J.Z;
                else if (l.id === K.T4.CHANNEL_BROWSER || l.id === K.T4.CUSTOMIZE_COMMUNITY) return S.k;
            }
            return null;
    }
}
function ll(l) {
    switch (l) {
        case W.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case W.rbe.GUILD_STORE:
            return h.g;
        case W.rbe.DM:
        case W.rbe.GROUP_DM:
            return d.X;
        case W.rbe.PRIVATE_THREAD:
            return o.t;
        case W.rbe.ANNOUNCEMENT_THREAD:
        case W.rbe.PUBLIC_THREAD:
            return u.y;
        case W.rbe.GUILD_TEXT:
            return m.N;
        case W.rbe.GUILD_FORUM:
            return _.b;
        case W.rbe.GUILD_MEDIA:
            return R.x;
        case W.rbe.GUILD_STAGE_VOICE:
            return D.q;
        case W.rbe.GUILD_VOICE:
            return G.H;
        case W.rbe.GUILD_CATEGORY:
            return F.s;
        default:
            return null;
    }
}
