"use strict";
n.d(t, { Bq: () => X, _U: () => J, gU: () => Q });
var i = n(138134),
    r = n(622629),
    s = n(922288),
    a = n(986226),
    o = n(669281),
    l = n(778492),
    u = n(278416),
    c = n(935063),
    d = n(425557),
    _ = n(176781),
    h = n(948428),
    f = n(534890),
    p = n(163328),
    E = n(24825),
    m = n(11779),
    g = n(446057),
    A = n(770880),
    I = n(276293),
    T = n(87221),
    S = n(781481),
    y = n(760911),
    C = n(532590),
    N = n(597050),
    v = n(191023),
    R = n(434831),
    O = n(56059),
    b = n(194261),
    D = n(808107),
    L = n(451394),
    w = n(512474),
    M = n(445567),
    P = n(183623),
    x = n(844972),
    k = n(146151),
    U = n(428689),
    G = n(983851),
    F = n(101277),
    V = n(678708),
    B = n(855473),
    j = n(740426),
    H = n(51758),
    Y = n(696451),
    W = n(71393),
    K = n(287809),
    $ = n(148719),
    z = n(746080),
    q = n(652215),
    Z = n(375708);
function X(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return Z.intl.string(Z.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
        case q.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return Z.intl.string(Z.t.Lt3PAK);
            if (i) return Z.intl.string(Z.t.LKpYbi);
            if (r) return Z.intl.string(Z.t.vvASTb);
            if (e.isSpoilerChannel()) return Z.intl.string(Z.t["8QsJXA"]);
            if ((0, $.A)(e)) return Z.intl.string(Z.t.jQ1plj);
            return Z.intl.string(Z.t.t1yj0N);
        case q.rbe.GUILD_FORUM:
            let s = e.isMediaChannel();
            if (r) return s ? Z.intl.string(Z.t["pZ/fYa"]) : Z.intl.string(Z.t.ibmpPi);
            if (e.isSpoilerChannel()) return Z.intl.string(Z.t.TDGaxd);
            if ((0, $.A)(e)) return s ? Z.intl.string(Z.t.gfVCfL) : Z.intl.string(Z.t.UbLM3J);
            return s ? Z.intl.string(Z.t.seKITE) : Z.intl.string(Z.t["0sDXdm"]);
        case q.rbe.GUILD_MEDIA:
            if (r) return Z.intl.string(Z.t["pZ/fYa"]);
            if ((0, $.A)(e)) return Z.intl.string(Z.t.gfVCfL);
            return Z.intl.string(Z.t.seKITE);
        case q.rbe.GUILD_STAGE_VOICE:
            if (n) return Z.intl.string(Z.t.ZjZB3r);
            if ((0, $.A)(e)) return Z.intl.string(Z.t["7pRuCQ"]);
            return Z.intl.string(Z.t.eJFSiN);
        case q.rbe.GUILD_VOICE:
            if (n) return Z.intl.string(Z.t.xY8Wth);
            if (r) return Z.intl.string(Z.t.ajeTKN);
            if (e.isSpoilerChannel()) return Z.intl.string(Z.t.hGmOlP);
            if ((0, $.A)(e)) return Z.intl.string(Z.t.qaY8Dm);
            return Z.intl.string(Z.t["0kBmow"]);
        case q.rbe.GUILD_ANNOUNCEMENT:
            if (r) return Z.intl.string(Z.t.eRc6o9);
            if (e.isSpoilerChannel()) return Z.intl.string(Z.t["7F1TCC"]);
            if ((0, $.A)(e)) return Z.intl.string(Z.t.EHLQwl);
            return Z.intl.string(Z.t.GtDRi2);
        case q.rbe.GUILD_STORE:
            return Z.intl.string(Z.t.Ea4NDL);
        case q.rbe.DM:
            return Z.intl.string(Z.t.jN2DfZ);
        case q.rbe.GROUP_DM:
            return Z.intl.string(Z.t["e5y+gm"]);
        case q.rbe.GUILD_DIRECTORY:
            return Z.intl.string(Z.t.IzZTIe);
        case q.rbe.PUBLIC_THREAD:
            return Z.intl.string(Z.t["7Xm5QI"]);
        case q.rbe.PRIVATE_THREAD:
            return Z.intl.string(Z.t.F1zyvU);
        default:
            return null;
    }
}
function Q(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: Z = !1, video: X = !1, stream: Q = !1, hasActiveThreads: J = !1, textFocused: ee = !1 } = n;
    if (null == e) return null;
    null == t && (t = W.A.getGuild(e.getGuildId()));
    let et = (0, H.V)(t?.id, [W.A, K.default, Y.Ay]);
    if (e.isModeratorReportChannel()) return i.i;
    if (e?.id === t?.rulesChannelId) return r.B;
    let en = e.isNSFW();
    switch (e.type) {
        case q.rbe.GUILD_ANNOUNCEMENT:
            if (J)
                if (en) return s.M;
                else if (e.isSpoilerChannel()) return a.u;
                else if ((0, $.A)(e)) return o.X;
                else return l.k;
            if (en) return s.M;
            if (e.isSpoilerChannel()) return a.u;
            if ((0, $.A)(e)) return o.X;
            return l.k;
        case q.rbe.GUILD_STORE:
            return u.g;
        case q.rbe.DM:
        case q.rbe.GROUP_DM:
            return c.X;
        case q.rbe.PRIVATE_THREAD:
            return d.t;
        case q.rbe.MEDIA_THREAD:
            return _.x;
        case q.rbe.ANNOUNCEMENT_THREAD:
        case q.rbe.PUBLIC_THREAD:
            if (en) return h.m;
            if (e.isForumPost()) return f.o;
            return p.y;
        case q.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return E.x;
            if (en) return m.r;
            if (e.isSpoilerChannel()) return g.n;
            if ((0, $.A)(e)) return A.I;
            return I.N;
        case q.rbe.GUILD_FORUM:
            let ei = e.isMediaChannel();
            if (en) return ei ? T.D : S.f;
            if (e.isSpoilerChannel()) return y.H;
            if ((0, $.A)(e)) return ei ? C.c : N.Q;
            else if (ei) return v.x;
            else if (e.isGameInvitesChannel()) return R.t;
            else return O.b;
        case q.rbe.GUILD_MEDIA:
            if (en) return T.D;
            if ((0, $.A)(e)) return C.c;
            return v.x;
        case q.rbe.GUILD_STAGE_VOICE:
            if (et) return (0, $.A)(e) ? b.X : D.D;
            if (Z) return b.X;
            if ((0, $.A)(e)) return D.D;
            else return L.q;
        case q.rbe.GUILD_VOICE:
            if (ee) return f.o;
            if (en) return w.O;
            if (e.isSpoilerChannel()) return M.P;
            if (Q) return P.F;
            if (et)
                if ((0, $.A)(e)) return b.X;
                else return X ? x.k : k.t;
            if (Z) return b.X;
            if ((0, $.A)(e)) return X ? x.k : k.t;
            else return X ? U.n : G.H;
        case q.rbe.GUILD_DIRECTORY:
            return F.P;
        case q.rbe.GUILD_CATEGORY:
            return V.s;
        default:
            if (z.aQ.has(e.id)) {
                if (e.id === z.T4.GUILD_HOME || e.id === z.T4.SERVER_GUIDE) return B.Z;
                else if (e.id === z.T4.CHANNEL_BROWSER || e.id === z.T4.CUSTOMIZE_COMMUNITY) return j.k;
            }
            return null;
    }
}
function J(e) {
    switch (e) {
        case q.rbe.GUILD_ANNOUNCEMENT:
            return l.k;
        case q.rbe.GUILD_STORE:
            return u.g;
        case q.rbe.DM:
        case q.rbe.GROUP_DM:
            return c.X;
        case q.rbe.PRIVATE_THREAD:
            return d.t;
        case q.rbe.ANNOUNCEMENT_THREAD:
        case q.rbe.PUBLIC_THREAD:
            return p.y;
        case q.rbe.GUILD_TEXT:
        case q.rbe.GUILD_FORUM:
        case q.rbe.GUILD_MEDIA:
            return I.N;
        case q.rbe.GUILD_STAGE_VOICE:
            return L.q;
        case q.rbe.GUILD_VOICE:
            return G.H;
        case q.rbe.GUILD_CATEGORY:
            return V.s;
        default:
            return null;
    }
}
