t.d(e, { Bq: () => P, _U: () => Y, gU: () => S });
var a = t(138134),
    s = t(622629),
    r = t(922288),
    i = t(669281),
    n = t(778492),
    c = t(278416),
    h = t(935063),
    d = t(425557),
    v = t(948428),
    o = t(534890),
    g = t(163328),
    f = t(24825),
    u = t(11779),
    w = t(770880),
    A = t(276293),
    p = t(87221),
    I = t(781481),
    E = t(532590),
    N = t(597050),
    m = t(191023),
    T = t(56059),
    x = t(194261),
    R = t(808107),
    _ = t(451394),
    M = t(512474),
    Z = t(183623),
    L = t(844972),
    D = t(146151),
    C = t(428689),
    U = t(983851),
    j = t(101277),
    V = t(678708),
    b = t(855473),
    O = t(740426),
    y = t(51758),
    H = t(696451),
    G = t(71393),
    B = t(287809),
    F = t(148719),
    J = t(746080),
    k = t(652215),
    X = t(985018);
function P(l, e, t, a) {
    if (null == l) return null;
    if (l.id === e?.rulesChannelId) return X.intl.string(X.t["/7EhaT"]);
    let s = l.isNSFW();
    switch (l.type) {
        case k.rbe.GUILD_TEXT:
            if (null != l.linkedLobby) return X.intl.string(X.t.Lt3PAK);
            if (a) return X.intl.string(X.t.LKpYbi);
            if (s) return X.intl.string(X.t.vvASTb);
            if ((0, F.A)(l)) return X.intl.string(X.t.jQ1plj);
            return X.intl.string(X.t.t1yj0N);
        case k.rbe.GUILD_FORUM:
            let r = l.isMediaChannel();
            if (s) return r ? X.intl.string(X.t["pZ/fYa"]) : X.intl.string(X.t.ibmpPi);
            if ((0, F.A)(l)) return r ? X.intl.string(X.t.gfVCfL) : X.intl.string(X.t.UbLM3J);
            return r ? X.intl.string(X.t.seKITE) : X.intl.string(X.t["0sDXdm"]);
        case k.rbe.GUILD_MEDIA:
            if (s) return X.intl.string(X.t["pZ/fYa"]);
            if ((0, F.A)(l)) return X.intl.string(X.t.gfVCfL);
            return X.intl.string(X.t.seKITE);
        case k.rbe.GUILD_STAGE_VOICE:
            if (t) return X.intl.string(X.t.ZjZB3r);
            if ((0, F.A)(l)) return X.intl.string(X.t["7pRuCQ"]);
            return X.intl.string(X.t.eJFSiN);
        case k.rbe.GUILD_VOICE:
            if (t) return X.intl.string(X.t.xY8Wth);
            if ((0, F.A)(l)) return X.intl.string(X.t.qaY8Dm);
            return X.intl.string(X.t["0kBmow"]);
        case k.rbe.GUILD_ANNOUNCEMENT:
            if (s) return X.intl.string(X.t.eRc6o9);
            if ((0, F.A)(l)) return X.intl.string(X.t.EHLQwl);
            return X.intl.string(X.t.GtDRi2);
        case k.rbe.GUILD_STORE:
            return X.intl.string(X.t.Ea4NDL);
        case k.rbe.DM:
            return X.intl.string(X.t.jN2DfZ);
        case k.rbe.GROUP_DM:
            return X.intl.string(X.t["e5y+gm"]);
        case k.rbe.GUILD_DIRECTORY:
            return X.intl.string(X.t.IzZTIe);
        case k.rbe.PUBLIC_THREAD:
            return X.intl.string(X.t["7Xm5QI"]);
        case k.rbe.PRIVATE_THREAD:
            return X.intl.string(X.t.F1zyvU);
        default:
            return null;
    }
}
function S(l, e) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: X = !1, video: P = !1, stream: S = !1, hasActiveThreads: Y = !1, textFocused: Q = !1 } = t;
    if (null == l) return null;
    null == e && (e = G.A.getGuild(l.getGuildId()));
    let q = (0, y.V)(e?.id, [G.A, B.default, H.Ay]);
    if (l.isModeratorReportChannel()) return a.i;
    if (l?.id === e?.rulesChannelId) return s.B;
    let K = l.isNSFW();
    switch (l.type) {
        case k.rbe.GUILD_ANNOUNCEMENT:
            if (Y)
                if (K) return r.M;
                else if ((0, F.A)(l)) return i.X;
                else return n.k;
            if (K) return r.M;
            if ((0, F.A)(l)) return i.X;
            return n.k;
        case k.rbe.GUILD_STORE:
            return c.g;
        case k.rbe.DM:
        case k.rbe.GROUP_DM:
            return h.X;
        case k.rbe.PRIVATE_THREAD:
            return d.t;
        case k.rbe.ANNOUNCEMENT_THREAD:
        case k.rbe.PUBLIC_THREAD:
            if (K) return v.m;
            if (l.isForumPost()) return o.o;
            return g.y;
        case k.rbe.GUILD_TEXT:
            if (null != l.linkedLobby) return f.x;
            if (K) return u.r;
            if ((0, F.A)(l)) return w.I;
            return A.N;
        case k.rbe.GUILD_FORUM:
            let W = l.isMediaChannel();
            if (K) return W ? p.D : I.f;
            if ((0, F.A)(l)) return W ? E.c : N.Q;
            return W ? m.x : T.b;
        case k.rbe.GUILD_MEDIA:
            if (K) return p.D;
            if ((0, F.A)(l)) return E.c;
            return m.x;
        case k.rbe.GUILD_STAGE_VOICE:
            if (q) return (0, F.A)(l) ? x.X : R.D;
            if (X) return x.X;
            if ((0, F.A)(l)) return R.D;
            else return _.q;
        case k.rbe.GUILD_VOICE:
            if (Q) return o.o;
            if (K) return M.O;
            if (S) return Z.F;
            if (q)
                if ((0, F.A)(l)) return x.X;
                else return P ? L.k : D.t;
            if (X) return x.X;
            if ((0, F.A)(l)) return P ? L.k : D.t;
            else return P ? C.n : U.H;
        case k.rbe.GUILD_DIRECTORY:
            return j.P;
        case k.rbe.GUILD_CATEGORY:
            return V.s;
        default:
            if (J.aQ.has(l.id)) {
                if (l.id === J.T4.GUILD_HOME || l.id === J.T4.SERVER_GUIDE) return b.Z;
                else if (l.id === J.T4.CHANNEL_BROWSER || l.id === J.T4.CUSTOMIZE_COMMUNITY) return O.k;
            }
            return null;
    }
}
function Y(l) {
    switch (l) {
        case k.rbe.GUILD_ANNOUNCEMENT:
            return n.k;
        case k.rbe.GUILD_STORE:
            return c.g;
        case k.rbe.DM:
        case k.rbe.GROUP_DM:
            return h.X;
        case k.rbe.PRIVATE_THREAD:
            return d.t;
        case k.rbe.ANNOUNCEMENT_THREAD:
        case k.rbe.PUBLIC_THREAD:
            return g.y;
        case k.rbe.GUILD_TEXT:
        case k.rbe.GUILD_FORUM:
        case k.rbe.GUILD_MEDIA:
            return A.N;
        case k.rbe.GUILD_STAGE_VOICE:
            return _.q;
        case k.rbe.GUILD_VOICE:
            return U.H;
        case k.rbe.GUILD_CATEGORY:
            return V.s;
        default:
            return null;
    }
}
