"use strict";
n.d(t, { Bq: () => Z, _U: () => Q, gU: () => X });
var i = n(138134),
    r = n(622629),
    s = n(922288),
    a = n(986226),
    o = n(669281),
    l = n(778492),
    u = n(278416),
    c = n(935063),
    d = n(425557),
    _ = n(948428),
    h = n(534890),
    f = n(163328),
    p = n(24825),
    E = n(11779),
    m = n(446057),
    g = n(770880),
    A = n(276293),
    I = n(87221),
    T = n(781481),
    S = n(760911),
    y = n(532590),
    C = n(597050),
    N = n(191023),
    v = n(434831),
    R = n(56059),
    O = n(194261),
    b = n(808107),
    D = n(451394),
    L = n(512474),
    w = n(445567),
    M = n(183623),
    P = n(844972),
    x = n(146151),
    k = n(428689),
    U = n(983851),
    G = n(101277),
    F = n(678708),
    V = n(855473),
    B = n(740426),
    j = n(51758),
    H = n(696451),
    Y = n(71393),
    W = n(287809),
    K = n(148719),
    $ = n(746080),
    z = n(652215),
    q = n(375708);
function Z(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return q.intl.string(q.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
        case z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return q.intl.string(q.t.Lt3PAK);
            if (i) return q.intl.string(q.t.LKpYbi);
            if (r) return q.intl.string(q.t.vvASTb);
            if (e.isSpoilerChannel()) return q.intl.string(q.t["8QsJXA"]);
            if ((0, K.A)(e)) return q.intl.string(q.t.jQ1plj);
            return q.intl.string(q.t.t1yj0N);
        case z.rbe.GUILD_FORUM:
            let s = e.isMediaChannel();
            if (r) return s ? q.intl.string(q.t["pZ/fYa"]) : q.intl.string(q.t.ibmpPi);
            if (e.isSpoilerChannel()) return q.intl.string(q.t.TDGaxd);
            if ((0, K.A)(e)) return s ? q.intl.string(q.t.gfVCfL) : q.intl.string(q.t.UbLM3J);
            return s ? q.intl.string(q.t.seKITE) : q.intl.string(q.t["0sDXdm"]);
        case z.rbe.GUILD_MEDIA:
            if (r) return q.intl.string(q.t["pZ/fYa"]);
            if ((0, K.A)(e)) return q.intl.string(q.t.gfVCfL);
            return q.intl.string(q.t.seKITE);
        case z.rbe.GUILD_STAGE_VOICE:
            if (n) return q.intl.string(q.t.ZjZB3r);
            if ((0, K.A)(e)) return q.intl.string(q.t["7pRuCQ"]);
            return q.intl.string(q.t.eJFSiN);
        case z.rbe.GUILD_VOICE:
            if (n) return q.intl.string(q.t.xY8Wth);
            if (r) return q.intl.string(q.t.ajeTKN);
            if (e.isSpoilerChannel()) return q.intl.string(q.t.hGmOlP);
            if ((0, K.A)(e)) return q.intl.string(q.t.qaY8Dm);
            return q.intl.string(q.t["0kBmow"]);
        case z.rbe.GUILD_ANNOUNCEMENT:
            if (r) return q.intl.string(q.t.eRc6o9);
            if (e.isSpoilerChannel()) return q.intl.string(q.t["7F1TCC"]);
            if ((0, K.A)(e)) return q.intl.string(q.t.EHLQwl);
            return q.intl.string(q.t.GtDRi2);
        case z.rbe.GUILD_STORE:
            return q.intl.string(q.t.Ea4NDL);
        case z.rbe.DM:
            return q.intl.string(q.t.jN2DfZ);
        case z.rbe.GROUP_DM:
            return q.intl.string(q.t["e5y+gm"]);
        case z.rbe.GUILD_DIRECTORY:
            return q.intl.string(q.t.IzZTIe);
        case z.rbe.PUBLIC_THREAD:
            return q.intl.string(q.t["7Xm5QI"]);
        case z.rbe.PRIVATE_THREAD:
            return q.intl.string(q.t.F1zyvU);
        default:
            return null;
    }
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: q = !1, video: Z = !1, stream: X = !1, hasActiveThreads: Q = !1, textFocused: J = !1 } = n;
    if (null == e) return null;
    null == t && (t = Y.A.getGuild(e.getGuildId()));
    let ee = (0, j.V)(t?.id, [Y.A, W.default, H.Ay]);
    if (e.isModeratorReportChannel()) return i.i;
    if (e?.id === t?.rulesChannelId) return r.B;
    let et = e.isNSFW();
    switch (e.type) {
        case z.rbe.GUILD_ANNOUNCEMENT:
            if (Q)
                if (et) return s.M;
                else if (e.isSpoilerChannel()) return a.u;
                else if ((0, K.A)(e)) return o.X;
                else return l.k;
            if (et) return s.M;
            if (e.isSpoilerChannel()) return a.u;
            if ((0, K.A)(e)) return o.X;
            return l.k;
        case z.rbe.GUILD_STORE:
            return u.g;
        case z.rbe.DM:
        case z.rbe.GROUP_DM:
            return c.X;
        case z.rbe.PRIVATE_THREAD:
            return d.t;
        case z.rbe.ANNOUNCEMENT_THREAD:
        case z.rbe.PUBLIC_THREAD:
            if (et) return _.m;
            if (e.isForumPost()) return h.o;
            return f.y;
        case z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return p.x;
            if (et) return E.r;
            if (e.isSpoilerChannel()) return m.n;
            if ((0, K.A)(e)) return g.I;
            return A.N;
        case z.rbe.GUILD_FORUM:
            let en = e.isMediaChannel();
            if (et) return en ? I.D : T.f;
            if (e.isSpoilerChannel()) return S.H;
            if ((0, K.A)(e)) return en ? y.c : C.Q;
            else if (en) return N.x;
            else if (e.isGameInvitesChannel()) return v.t;
            else return R.b;
        case z.rbe.GUILD_MEDIA:
            if (et) return I.D;
            if ((0, K.A)(e)) return y.c;
            return N.x;
        case z.rbe.GUILD_STAGE_VOICE:
            if (ee) return (0, K.A)(e) ? O.X : b.D;
            if (q) return O.X;
            if ((0, K.A)(e)) return b.D;
            else return D.q;
        case z.rbe.GUILD_VOICE:
            if (J) return h.o;
            if (et) return L.O;
            if (e.isSpoilerChannel()) return w.P;
            if (X) return M.F;
            if (ee)
                if ((0, K.A)(e)) return O.X;
                else return Z ? P.k : x.t;
            if (q) return O.X;
            if ((0, K.A)(e)) return Z ? P.k : x.t;
            else return Z ? k.n : U.H;
        case z.rbe.GUILD_DIRECTORY:
            return G.P;
        case z.rbe.GUILD_CATEGORY:
            return F.s;
        default:
            if ($.aQ.has(e.id)) {
                if (e.id === $.T4.GUILD_HOME || e.id === $.T4.SERVER_GUIDE) return V.Z;
                else if (e.id === $.T4.CHANNEL_BROWSER || e.id === $.T4.CUSTOMIZE_COMMUNITY) return B.k;
            }
            return null;
    }
}
function Q(e) {
    switch (e) {
        case z.rbe.GUILD_ANNOUNCEMENT:
            return l.k;
        case z.rbe.GUILD_STORE:
            return u.g;
        case z.rbe.DM:
        case z.rbe.GROUP_DM:
            return c.X;
        case z.rbe.PRIVATE_THREAD:
            return d.t;
        case z.rbe.ANNOUNCEMENT_THREAD:
        case z.rbe.PUBLIC_THREAD:
            return f.y;
        case z.rbe.GUILD_TEXT:
        case z.rbe.GUILD_FORUM:
        case z.rbe.GUILD_MEDIA:
            return A.N;
        case z.rbe.GUILD_STAGE_VOICE:
            return D.q;
        case z.rbe.GUILD_VOICE:
            return U.H;
        case z.rbe.GUILD_CATEGORY:
            return F.s;
        default:
            return null;
    }
}
