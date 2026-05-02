t.d(l, { Bq: () => K, _U: () => W, gU: () => q });
var s = t(138134),
    a = t(622629),
    r = t(922288),
    i = t(986226),
    n = t(669281),
    c = t(778492),
    h = t(278416),
    d = t(935063),
    o = t(425557),
    v = t(948428),
    f = t(534890),
    g = t(163328),
    u = t(24825),
    A = t(11779),
    w = t(446057),
    p = t(770880),
    m = t(276293),
    I = t(87221),
    N = t(781481),
    E = t(760911),
    x = t(532590),
    T = t(597050),
    R = t(191023),
    Z = t(56059),
    M = t(194261),
    _ = t(808107),
    C = t(451394),
    L = t(512474),
    D = t(445567),
    j = t(183623),
    U = t(844972),
    V = t(146151),
    y = t(428689),
    H = t(983851),
    O = t(101277),
    b = t(678708),
    G = t(855473),
    F = t(740426),
    B = t(51758),
    J = t(696451),
    S = t(71393),
    k = t(287809),
    P = t(148719),
    X = t(746080),
    Y = t(652215),
    Q = t(375708);
function K(e, l, t, s) {
    if (null == e) return null;
    if (e.id === l?.rulesChannelId) return Q.intl.string(Q.t["/7EhaT"]);
    let a = e.isNSFW();
    switch (e.type) {
        case Y.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return Q.intl.string(Q.t.Lt3PAK);
            if (s) return Q.intl.string(Q.t.LKpYbi);
            if (a) return Q.intl.string(Q.t.vvASTb);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t["8QsJXA"]);
            if ((0, P.A)(e)) return Q.intl.string(Q.t.jQ1plj);
            return Q.intl.string(Q.t.t1yj0N);
        case Y.rbe.GUILD_FORUM:
            let r = e.isMediaChannel();
            if (a) return r ? Q.intl.string(Q.t["pZ/fYa"]) : Q.intl.string(Q.t.ibmpPi);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t.TDGaxd);
            if ((0, P.A)(e)) return r ? Q.intl.string(Q.t.gfVCfL) : Q.intl.string(Q.t.UbLM3J);
            return r ? Q.intl.string(Q.t.seKITE) : Q.intl.string(Q.t["0sDXdm"]);
        case Y.rbe.GUILD_MEDIA:
            if (a) return Q.intl.string(Q.t["pZ/fYa"]);
            if ((0, P.A)(e)) return Q.intl.string(Q.t.gfVCfL);
            return Q.intl.string(Q.t.seKITE);
        case Y.rbe.GUILD_STAGE_VOICE:
            if (t) return Q.intl.string(Q.t.ZjZB3r);
            if ((0, P.A)(e)) return Q.intl.string(Q.t["7pRuCQ"]);
            return Q.intl.string(Q.t.eJFSiN);
        case Y.rbe.GUILD_VOICE:
            if (t) return Q.intl.string(Q.t.xY8Wth);
            if (a) return Q.intl.string(Q.t.ajeTKN);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t.hGmOlP);
            if ((0, P.A)(e)) return Q.intl.string(Q.t.qaY8Dm);
            return Q.intl.string(Q.t["0kBmow"]);
        case Y.rbe.GUILD_ANNOUNCEMENT:
            if (a) return Q.intl.string(Q.t.eRc6o9);
            if (e.isSpoilerChannel()) return Q.intl.string(Q.t["7F1TCC"]);
            if ((0, P.A)(e)) return Q.intl.string(Q.t.EHLQwl);
            return Q.intl.string(Q.t.GtDRi2);
        case Y.rbe.GUILD_STORE:
            return Q.intl.string(Q.t.Ea4NDL);
        case Y.rbe.DM:
            return Q.intl.string(Q.t.jN2DfZ);
        case Y.rbe.GROUP_DM:
            return Q.intl.string(Q.t["e5y+gm"]);
        case Y.rbe.GUILD_DIRECTORY:
            return Q.intl.string(Q.t.IzZTIe);
        case Y.rbe.PUBLIC_THREAD:
            return Q.intl.string(Q.t["7Xm5QI"]);
        case Y.rbe.PRIVATE_THREAD:
            return Q.intl.string(Q.t.F1zyvU);
        default:
            return null;
    }
}
function q(e, l) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: Q = !1, video: K = !1, stream: q = !1, hasActiveThreads: W = !1, textFocused: z = !1 } = t;
    if (null == e) return null;
    null == l && (l = S.A.getGuild(e.getGuildId()));
    let $ = (0, B.V)(l?.id, [S.A, k.default, J.Ay]);
    if (e.isModeratorReportChannel()) return s.i;
    if (e?.id === l?.rulesChannelId) return a.B;
    let ee = e.isNSFW();
    switch (e.type) {
        case Y.rbe.GUILD_ANNOUNCEMENT:
            if (W)
                if (ee) return r.M;
                else if (e.isSpoilerChannel()) return i.u;
                else if ((0, P.A)(e)) return n.X;
                else return c.k;
            if (ee) return r.M;
            if (e.isSpoilerChannel()) return i.u;
            if ((0, P.A)(e)) return n.X;
            return c.k;
        case Y.rbe.GUILD_STORE:
            return h.g;
        case Y.rbe.DM:
        case Y.rbe.GROUP_DM:
            return d.X;
        case Y.rbe.PRIVATE_THREAD:
            return o.t;
        case Y.rbe.ANNOUNCEMENT_THREAD:
        case Y.rbe.PUBLIC_THREAD:
            if (ee) return v.m;
            if (e.isForumPost()) return f.o;
            return g.y;
        case Y.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return u.x;
            if (ee) return A.r;
            if (e.isSpoilerChannel()) return w.n;
            if ((0, P.A)(e)) return p.I;
            return m.N;
        case Y.rbe.GUILD_FORUM:
            let el = e.isMediaChannel();
            if (ee) return el ? I.D : N.f;
            if (e.isSpoilerChannel()) return E.H;
            if ((0, P.A)(e)) return el ? x.c : T.Q;
            else return el ? R.x : Z.b;
        case Y.rbe.GUILD_MEDIA:
            if (ee) return I.D;
            if ((0, P.A)(e)) return x.c;
            return R.x;
        case Y.rbe.GUILD_STAGE_VOICE:
            if ($) return (0, P.A)(e) ? M.X : _.D;
            if (Q) return M.X;
            if ((0, P.A)(e)) return _.D;
            else return C.q;
        case Y.rbe.GUILD_VOICE:
            if (z) return f.o;
            if (ee) return L.O;
            if (e.isSpoilerChannel()) return D.P;
            if (q) return j.F;
            if ($)
                if ((0, P.A)(e)) return M.X;
                else return K ? U.k : V.t;
            if (Q) return M.X;
            if ((0, P.A)(e)) return K ? U.k : V.t;
            else return K ? y.n : H.H;
        case Y.rbe.GUILD_DIRECTORY:
            return O.P;
        case Y.rbe.GUILD_CATEGORY:
            return b.s;
        default:
            if (X.aQ.has(e.id)) {
                if (e.id === X.T4.GUILD_HOME || e.id === X.T4.SERVER_GUIDE) return G.Z;
                else if (e.id === X.T4.CHANNEL_BROWSER || e.id === X.T4.CUSTOMIZE_COMMUNITY) return F.k;
            }
            return null;
    }
}
function W(e) {
    switch (e) {
        case Y.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case Y.rbe.GUILD_STORE:
            return h.g;
        case Y.rbe.DM:
        case Y.rbe.GROUP_DM:
            return d.X;
        case Y.rbe.PRIVATE_THREAD:
            return o.t;
        case Y.rbe.ANNOUNCEMENT_THREAD:
        case Y.rbe.PUBLIC_THREAD:
            return g.y;
        case Y.rbe.GUILD_TEXT:
        case Y.rbe.GUILD_FORUM:
        case Y.rbe.GUILD_MEDIA:
            return m.N;
        case Y.rbe.GUILD_STAGE_VOICE:
            return C.q;
        case Y.rbe.GUILD_VOICE:
            return H.H;
        case Y.rbe.GUILD_CATEGORY:
            return b.s;
        default:
            return null;
    }
}
