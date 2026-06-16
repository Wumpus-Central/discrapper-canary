t.d(l, { Bq: () => q, _U: () => z, gU: () => W });
var s = t(138134),
    a = t(622629),
    i = t(922288),
    r = t(986226),
    n = t(669281),
    c = t(778492),
    h = t(278416),
    d = t(935063),
    v = t(425557),
    o = t(948428),
    f = t(534890),
    g = t(163328),
    u = t(24825),
    A = t(11779),
    w = t(446057),
    p = t(770880),
    m = t(276293),
    N = t(87221),
    x = t(781481),
    I = t(760911),
    E = t(532590),
    T = t(597050),
    Z = t(191023),
    M = t(434831),
    R = t(56059),
    C = t(194261),
    _ = t(808107),
    L = t(451394),
    j = t(512474),
    D = t(445567),
    U = t(183623),
    V = t(844972),
    y = t(146151),
    H = t(428689),
    O = t(983851),
    b = t(101277),
    G = t(678708),
    F = t(855473),
    B = t(740426),
    J = t(51758),
    S = t(696451),
    k = t(71393),
    P = t(287809),
    X = t(148719),
    Y = t(746080),
    Q = t(652215),
    K = t(375708);
function q(e, l, t, s) {
    if (null == e) return null;
    if (e.id === l?.rulesChannelId) return K.intl.string(K.t["/7EhaT"]);
    let a = e.isNSFW();
    switch (e.type) {
        case Q.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return K.intl.string(K.t.Lt3PAK);
            if (s) return K.intl.string(K.t.LKpYbi);
            if (a) return K.intl.string(K.t.vvASTb);
            if (e.isSpoilerChannel()) return K.intl.string(K.t["8QsJXA"]);
            if ((0, X.A)(e)) return K.intl.string(K.t.jQ1plj);
            return K.intl.string(K.t.t1yj0N);
        case Q.rbe.GUILD_FORUM:
            let i = e.isMediaChannel();
            if (a) return i ? K.intl.string(K.t["pZ/fYa"]) : K.intl.string(K.t.ibmpPi);
            if (e.isSpoilerChannel()) return K.intl.string(K.t.TDGaxd);
            if ((0, X.A)(e)) return i ? K.intl.string(K.t.gfVCfL) : K.intl.string(K.t.UbLM3J);
            return i ? K.intl.string(K.t.seKITE) : K.intl.string(K.t["0sDXdm"]);
        case Q.rbe.GUILD_MEDIA:
            if (a) return K.intl.string(K.t["pZ/fYa"]);
            if ((0, X.A)(e)) return K.intl.string(K.t.gfVCfL);
            return K.intl.string(K.t.seKITE);
        case Q.rbe.GUILD_STAGE_VOICE:
            if (t) return K.intl.string(K.t.ZjZB3r);
            if ((0, X.A)(e)) return K.intl.string(K.t["7pRuCQ"]);
            return K.intl.string(K.t.eJFSiN);
        case Q.rbe.GUILD_VOICE:
            if (t) return K.intl.string(K.t.xY8Wth);
            if (a) return K.intl.string(K.t.ajeTKN);
            if (e.isSpoilerChannel()) return K.intl.string(K.t.hGmOlP);
            if ((0, X.A)(e)) return K.intl.string(K.t.qaY8Dm);
            return K.intl.string(K.t["0kBmow"]);
        case Q.rbe.GUILD_ANNOUNCEMENT:
            if (a) return K.intl.string(K.t.eRc6o9);
            if (e.isSpoilerChannel()) return K.intl.string(K.t["7F1TCC"]);
            if ((0, X.A)(e)) return K.intl.string(K.t.EHLQwl);
            return K.intl.string(K.t.GtDRi2);
        case Q.rbe.GUILD_STORE:
            return K.intl.string(K.t.Ea4NDL);
        case Q.rbe.DM:
            return K.intl.string(K.t.jN2DfZ);
        case Q.rbe.GROUP_DM:
            return K.intl.string(K.t["e5y+gm"]);
        case Q.rbe.GUILD_DIRECTORY:
            return K.intl.string(K.t.IzZTIe);
        case Q.rbe.PUBLIC_THREAD:
            return K.intl.string(K.t["7Xm5QI"]);
        case Q.rbe.PRIVATE_THREAD:
            return K.intl.string(K.t.F1zyvU);
        default:
            return null;
    }
}
function W(e, l) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: K = !1, video: q = !1, stream: W = !1, hasActiveThreads: z = !1, textFocused: $ = !1 } = t;
    if (null == e) return null;
    null == l && (l = k.A.getGuild(e.getGuildId()));
    let ee = (0, J.V)(l?.id, [k.A, P.default, S.Ay]);
    if (e.isModeratorReportChannel()) return s.i;
    if (e?.id === l?.rulesChannelId) return a.B;
    let el = e.isNSFW();
    switch (e.type) {
        case Q.rbe.GUILD_ANNOUNCEMENT:
            if (z)
                if (el) return i.M;
                else if (e.isSpoilerChannel()) return r.u;
                else if ((0, X.A)(e)) return n.X;
                else return c.k;
            if (el) return i.M;
            if (e.isSpoilerChannel()) return r.u;
            if ((0, X.A)(e)) return n.X;
            return c.k;
        case Q.rbe.GUILD_STORE:
            return h.g;
        case Q.rbe.DM:
        case Q.rbe.GROUP_DM:
            return d.X;
        case Q.rbe.PRIVATE_THREAD:
            return v.t;
        case Q.rbe.ANNOUNCEMENT_THREAD:
        case Q.rbe.PUBLIC_THREAD:
            if (el) return o.m;
            if (e.isForumPost()) return f.o;
            return g.y;
        case Q.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return u.x;
            if (el) return A.r;
            if (e.isSpoilerChannel()) return w.n;
            if ((0, X.A)(e)) return p.I;
            return m.N;
        case Q.rbe.GUILD_FORUM:
            let et = e.isMediaChannel();
            if (el) return et ? N.D : x.f;
            if (e.isSpoilerChannel()) return I.H;
            if ((0, X.A)(e)) return et ? E.c : T.Q;
            else if (et) return Z.x;
            else if (e.isGameInvitesChannel()) return M.t;
            else return R.b;
        case Q.rbe.GUILD_MEDIA:
            if (el) return N.D;
            if ((0, X.A)(e)) return E.c;
            return Z.x;
        case Q.rbe.GUILD_STAGE_VOICE:
            if (ee) return (0, X.A)(e) ? C.X : _.D;
            if (K) return C.X;
            if ((0, X.A)(e)) return _.D;
            else return L.q;
        case Q.rbe.GUILD_VOICE:
            if ($) return f.o;
            if (el) return j.O;
            if (e.isSpoilerChannel()) return D.P;
            if (W) return U.F;
            if (ee)
                if ((0, X.A)(e)) return C.X;
                else return q ? V.k : y.t;
            if (K) return C.X;
            if ((0, X.A)(e)) return q ? V.k : y.t;
            else return q ? H.n : O.H;
        case Q.rbe.GUILD_DIRECTORY:
            return b.P;
        case Q.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            if (Y.aQ.has(e.id)) {
                if (e.id === Y.T4.GUILD_HOME || e.id === Y.T4.SERVER_GUIDE) return F.Z;
                else if (e.id === Y.T4.CHANNEL_BROWSER || e.id === Y.T4.CUSTOMIZE_COMMUNITY) return B.k;
            }
            return null;
    }
}
function z(e) {
    switch (e) {
        case Q.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case Q.rbe.GUILD_STORE:
            return h.g;
        case Q.rbe.DM:
        case Q.rbe.GROUP_DM:
            return d.X;
        case Q.rbe.PRIVATE_THREAD:
            return v.t;
        case Q.rbe.ANNOUNCEMENT_THREAD:
        case Q.rbe.PUBLIC_THREAD:
            return g.y;
        case Q.rbe.GUILD_TEXT:
        case Q.rbe.GUILD_FORUM:
        case Q.rbe.GUILD_MEDIA:
            return m.N;
        case Q.rbe.GUILD_STAGE_VOICE:
            return L.q;
        case Q.rbe.GUILD_VOICE:
            return O.H;
        case Q.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            return null;
    }
}
