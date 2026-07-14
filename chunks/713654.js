"use strict";
n.d(t, { Bq: () => Q, _U: () => ee, gU: () => J });
var i = n(138134),
    r = n(622629),
    a = n(922288),
    s = n(986226),
    l = n(669281),
    o = n(778492),
    d = n(278416),
    c = n(935063),
    u = n(425557),
    _ = n(176781),
    E = n(948428),
    A = n(534890),
    h = n(163328),
    I = n(24825),
    f = n(11779),
    p = n(446057),
    T = n(770880),
    m = n(276293),
    g = n(87221),
    S = n(781481),
    N = n(760911),
    C = n(107086),
    O = n(532590),
    R = n(597050),
    L = n(191023),
    D = n(434831),
    y = n(56059),
    v = n(194261),
    b = n(808107),
    M = n(451394),
    P = n(512474),
    U = n(445567),
    w = n(183623),
    G = n(844972),
    x = n(146151),
    k = n(428689),
    F = n(983851),
    V = n(101277),
    B = n(678708),
    H = n(855473),
    j = n(740426),
    W = n(51758),
    Y = n(696451),
    K = n(71393),
    $ = n(287809),
    z = n(148719),
    q = n(746080),
    Z = n(652215),
    X = n(375708);
function Q(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return X.intl.string(X.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
        case Z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return X.intl.string(X.t.Lt3PAK);
            if (i) return X.intl.string(X.t.LKpYbi);
            if (r) return X.intl.string(X.t.vvASTb);
            if (e.isSpoilerChannel()) return X.intl.string(X.t["8QsJXA"]);
            if ((0, z.A)(e)) return X.intl.string(X.t.jQ1plj);
            return X.intl.string(X.t.t1yj0N);
        case Z.rbe.GUILD_FORUM:
            let a = e.isMediaChannel(),
                s = e.isGameInvitesChannel();
            if (r) return a ? X.intl.string(X.t["pZ/fYa"]) : X.intl.string(X.t.ibmpPi);
            if (e.isSpoilerChannel()) return X.intl.string(X.t.TDGaxd);
            if ((0, z.A)(e)) {
                if (s) return X.intl.string(X.t.AwjsC9);
                return a ? X.intl.string(X.t.gfVCfL) : X.intl.string(X.t.UbLM3J);
            }
            if (s) return X.intl.string(X.t.BW4VHV);
            return a ? X.intl.string(X.t.seKITE) : X.intl.string(X.t["0sDXdm"]);
        case Z.rbe.GUILD_MEDIA:
            if (r) return X.intl.string(X.t["pZ/fYa"]);
            if (e.isSpoilerChannel()) return X.intl.string(X.t.vjYxox);
            if ((0, z.A)(e)) return X.intl.string(X.t.gfVCfL);
            return X.intl.string(X.t.seKITE);
        case Z.rbe.GUILD_STAGE_VOICE:
            if (n) return X.intl.string(X.t.ZjZB3r);
            if ((0, z.A)(e)) return X.intl.string(X.t["7pRuCQ"]);
            return X.intl.string(X.t.eJFSiN);
        case Z.rbe.GUILD_VOICE:
            if (n) return X.intl.string(X.t.xY8Wth);
            if (r) return X.intl.string(X.t.ajeTKN);
            if (e.isSpoilerChannel()) return X.intl.string(X.t.hGmOlP);
            if ((0, z.A)(e)) return X.intl.string(X.t.qaY8Dm);
            return X.intl.string(X.t["0kBmow"]);
        case Z.rbe.GUILD_ANNOUNCEMENT:
            if (r) return X.intl.string(X.t.eRc6o9);
            if (e.isSpoilerChannel()) return X.intl.string(X.t["7F1TCC"]);
            if ((0, z.A)(e)) return X.intl.string(X.t.EHLQwl);
            return X.intl.string(X.t.GtDRi2);
        case Z.rbe.GUILD_STORE:
            return X.intl.string(X.t.Ea4NDL);
        case Z.rbe.DM:
            return X.intl.string(X.t.jN2DfZ);
        case Z.rbe.GROUP_DM:
            return X.intl.string(X.t["e5y+gm"]);
        case Z.rbe.GUILD_DIRECTORY:
            return X.intl.string(X.t.IzZTIe);
        case Z.rbe.PUBLIC_THREAD:
            return X.intl.string(X.t["7Xm5QI"]);
        case Z.rbe.PRIVATE_THREAD:
            return X.intl.string(X.t.F1zyvU);
        default:
            return null;
    }
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: X = !1, video: Q = !1, stream: J = !1, hasActiveThreads: ee = !1, textFocused: et = !1 } = n;
    if (null == e) return null;
    null == t && (t = K.A.getGuild(e.getGuildId()));
    let en = (0, W.V)(t?.id, [K.A, $.default, Y.Ay]);
    if (e.isModeratorReportChannel()) return i.i;
    if (e?.id === t?.rulesChannelId) return r.B;
    let ei = e.isNSFW();
    switch (e.type) {
        case Z.rbe.GUILD_ANNOUNCEMENT:
            if (ee)
                if (ei) return a.M;
                else if (e.isSpoilerChannel()) return s.u;
                else if ((0, z.A)(e)) return l.X;
                else return o.k;
            if (ei) return a.M;
            if (e.isSpoilerChannel()) return s.u;
            if ((0, z.A)(e)) return l.X;
            return o.k;
        case Z.rbe.GUILD_STORE:
            return d.g;
        case Z.rbe.DM:
        case Z.rbe.GROUP_DM:
            return c.X;
        case Z.rbe.PRIVATE_THREAD:
            return u.t;
        case Z.rbe.MEDIA_THREAD:
            return _.x;
        case Z.rbe.ANNOUNCEMENT_THREAD:
        case Z.rbe.PUBLIC_THREAD:
            if (ei) return E.m;
            if (e.isForumPost()) return A.o;
            return h.y;
        case Z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return I.x;
            if (ei) return f.r;
            if (e.isSpoilerChannel()) return p.n;
            if ((0, z.A)(e)) return T.I;
            return m.N;
        case Z.rbe.GUILD_FORUM:
            let er = e.isMediaChannel(),
                ea = e.isGameInvitesChannel();
            if (ei) return er ? g.D : S.f;
            if (e.isSpoilerChannel()) return N.H;
            if ((0, z.A)(e)) {
                if (ea) return C.s;
                return er ? O.c : R.Q;
            } else if (er) return L.x;
            else if (ea) return D.t;
            else return y.b;
        case Z.rbe.GUILD_MEDIA:
            if (ei) return g.D;
            if (e.isSpoilerChannel()) return N.H;
            if ((0, z.A)(e)) return O.c;
            else return L.x;
        case Z.rbe.GUILD_STAGE_VOICE:
            if (en) return (0, z.A)(e) ? v.X : b.D;
            if (X) return v.X;
            if ((0, z.A)(e)) return b.D;
            else return M.q;
        case Z.rbe.GUILD_VOICE:
            if (et) return A.o;
            if (ei) return P.O;
            if (e.isSpoilerChannel()) return U.P;
            if (J) return w.F;
            if (en)
                if ((0, z.A)(e)) return v.X;
                else return Q ? G.k : x.t;
            if (X) return v.X;
            if ((0, z.A)(e)) return Q ? G.k : x.t;
            else return Q ? k.n : F.H;
        case Z.rbe.GUILD_DIRECTORY:
            return V.P;
        case Z.rbe.GUILD_CATEGORY:
            return B.s;
        default:
            if (q.aQ.has(e.id)) {
                if (e.id === q.T4.GUILD_HOME || e.id === q.T4.SERVER_GUIDE) return H.Z;
                else if (e.id === q.T4.CHANNEL_BROWSER || e.id === q.T4.CUSTOMIZE_COMMUNITY) return j.k;
            }
            return null;
    }
}
function ee(e) {
    switch (e) {
        case Z.rbe.GUILD_ANNOUNCEMENT:
            return o.k;
        case Z.rbe.GUILD_STORE:
            return d.g;
        case Z.rbe.DM:
        case Z.rbe.GROUP_DM:
            return c.X;
        case Z.rbe.PRIVATE_THREAD:
            return u.t;
        case Z.rbe.ANNOUNCEMENT_THREAD:
        case Z.rbe.PUBLIC_THREAD:
            return h.y;
        case Z.rbe.GUILD_TEXT:
            return m.N;
        case Z.rbe.GUILD_FORUM:
            return y.b;
        case Z.rbe.GUILD_MEDIA:
            return L.x;
        case Z.rbe.GUILD_STAGE_VOICE:
            return M.q;
        case Z.rbe.GUILD_VOICE:
            return F.H;
        case Z.rbe.GUILD_CATEGORY:
            return B.s;
        default:
            return null;
    }
}
