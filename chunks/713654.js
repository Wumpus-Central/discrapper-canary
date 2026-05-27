"use strict";
n.d(t, { Bq: () => q, _U: () => Z, gU: () => X });
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
    N = n(597050),
    v = n(191023),
    C = n(56059),
    R = n(194261),
    O = n(808107),
    b = n(451394),
    D = n(512474),
    L = n(445567),
    w = n(183623),
    M = n(844972),
    P = n(146151),
    x = n(428689),
    k = n(983851),
    U = n(101277),
    G = n(678708),
    F = n(855473),
    V = n(740426),
    B = n(51758),
    H = n(696451),
    j = n(71393),
    Y = n(287809),
    W = n(148719),
    K = n(746080),
    $ = n(652215),
    z = n(375708);
function q(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return z.intl.string(z.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
        case $.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return z.intl.string(z.t.Lt3PAK);
            if (i) return z.intl.string(z.t.LKpYbi);
            if (r) return z.intl.string(z.t.vvASTb);
            if (e.isSpoilerChannel()) return z.intl.string(z.t["8QsJXA"]);
            if ((0, W.A)(e)) return z.intl.string(z.t.jQ1plj);
            return z.intl.string(z.t.t1yj0N);
        case $.rbe.GUILD_FORUM:
            let s = e.isMediaChannel();
            if (r) return s ? z.intl.string(z.t["pZ/fYa"]) : z.intl.string(z.t.ibmpPi);
            if (e.isSpoilerChannel()) return z.intl.string(z.t.TDGaxd);
            if ((0, W.A)(e)) return s ? z.intl.string(z.t.gfVCfL) : z.intl.string(z.t.UbLM3J);
            return s ? z.intl.string(z.t.seKITE) : z.intl.string(z.t["0sDXdm"]);
        case $.rbe.GUILD_MEDIA:
            if (r) return z.intl.string(z.t["pZ/fYa"]);
            if ((0, W.A)(e)) return z.intl.string(z.t.gfVCfL);
            return z.intl.string(z.t.seKITE);
        case $.rbe.GUILD_STAGE_VOICE:
            if (n) return z.intl.string(z.t.ZjZB3r);
            if ((0, W.A)(e)) return z.intl.string(z.t["7pRuCQ"]);
            return z.intl.string(z.t.eJFSiN);
        case $.rbe.GUILD_VOICE:
            if (n) return z.intl.string(z.t.xY8Wth);
            if (r) return z.intl.string(z.t.ajeTKN);
            if (e.isSpoilerChannel()) return z.intl.string(z.t.hGmOlP);
            if ((0, W.A)(e)) return z.intl.string(z.t.qaY8Dm);
            return z.intl.string(z.t["0kBmow"]);
        case $.rbe.GUILD_ANNOUNCEMENT:
            if (r) return z.intl.string(z.t.eRc6o9);
            if (e.isSpoilerChannel()) return z.intl.string(z.t["7F1TCC"]);
            if ((0, W.A)(e)) return z.intl.string(z.t.EHLQwl);
            return z.intl.string(z.t.GtDRi2);
        case $.rbe.GUILD_STORE:
            return z.intl.string(z.t.Ea4NDL);
        case $.rbe.DM:
            return z.intl.string(z.t.jN2DfZ);
        case $.rbe.GROUP_DM:
            return z.intl.string(z.t["e5y+gm"]);
        case $.rbe.GUILD_DIRECTORY:
            return z.intl.string(z.t.IzZTIe);
        case $.rbe.PUBLIC_THREAD:
            return z.intl.string(z.t["7Xm5QI"]);
        case $.rbe.PRIVATE_THREAD:
            return z.intl.string(z.t.F1zyvU);
        default:
            return null;
    }
}
function X(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: z = !1, video: q = !1, stream: X = !1, hasActiveThreads: Z = !1, textFocused: Q = !1 } = n;
    if (null == e) return null;
    null == t && (t = j.A.getGuild(e.getGuildId()));
    let J = (0, B.V)(t?.id, [j.A, Y.default, H.Ay]);
    if (e.isModeratorReportChannel()) return i.i;
    if (e?.id === t?.rulesChannelId) return r.B;
    let ee = e.isNSFW();
    switch (e.type) {
        case $.rbe.GUILD_ANNOUNCEMENT:
            if (Z)
                if (ee) return s.M;
                else if (e.isSpoilerChannel()) return a.u;
                else if ((0, W.A)(e)) return o.X;
                else return l.k;
            if (ee) return s.M;
            if (e.isSpoilerChannel()) return a.u;
            if ((0, W.A)(e)) return o.X;
            return l.k;
        case $.rbe.GUILD_STORE:
            return u.g;
        case $.rbe.DM:
        case $.rbe.GROUP_DM:
            return c.X;
        case $.rbe.PRIVATE_THREAD:
            return d.t;
        case $.rbe.ANNOUNCEMENT_THREAD:
        case $.rbe.PUBLIC_THREAD:
            if (ee) return _.m;
            if (e.isForumPost()) return h.o;
            return f.y;
        case $.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return p.x;
            if (ee) return E.r;
            if (e.isSpoilerChannel()) return m.n;
            if ((0, W.A)(e)) return g.I;
            return A.N;
        case $.rbe.GUILD_FORUM:
            let et = e.isMediaChannel();
            if (ee) return et ? I.D : T.f;
            if (e.isSpoilerChannel()) return S.H;
            if ((0, W.A)(e)) return et ? y.c : N.Q;
            else if (et) return v.x;
            else if (e.isGameInvitesChannel()) return p.x;
            else return C.b;
        case $.rbe.GUILD_MEDIA:
            if (ee) return I.D;
            if ((0, W.A)(e)) return y.c;
            return v.x;
        case $.rbe.GUILD_STAGE_VOICE:
            if (J) return (0, W.A)(e) ? R.X : O.D;
            if (z) return R.X;
            if ((0, W.A)(e)) return O.D;
            else return b.q;
        case $.rbe.GUILD_VOICE:
            if (Q) return h.o;
            if (ee) return D.O;
            if (e.isSpoilerChannel()) return L.P;
            if (X) return w.F;
            if (J)
                if ((0, W.A)(e)) return R.X;
                else return q ? M.k : P.t;
            if (z) return R.X;
            if ((0, W.A)(e)) return q ? M.k : P.t;
            else return q ? x.n : k.H;
        case $.rbe.GUILD_DIRECTORY:
            return U.P;
        case $.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            if (K.aQ.has(e.id)) {
                if (e.id === K.T4.GUILD_HOME || e.id === K.T4.SERVER_GUIDE) return F.Z;
                else if (e.id === K.T4.CHANNEL_BROWSER || e.id === K.T4.CUSTOMIZE_COMMUNITY) return V.k;
            }
            return null;
    }
}
function Z(e) {
    switch (e) {
        case $.rbe.GUILD_ANNOUNCEMENT:
            return l.k;
        case $.rbe.GUILD_STORE:
            return u.g;
        case $.rbe.DM:
        case $.rbe.GROUP_DM:
            return c.X;
        case $.rbe.PRIVATE_THREAD:
            return d.t;
        case $.rbe.ANNOUNCEMENT_THREAD:
        case $.rbe.PUBLIC_THREAD:
            return f.y;
        case $.rbe.GUILD_TEXT:
        case $.rbe.GUILD_FORUM:
        case $.rbe.GUILD_MEDIA:
            return A.N;
        case $.rbe.GUILD_STAGE_VOICE:
            return b.q;
        case $.rbe.GUILD_VOICE:
            return k.H;
        case $.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            return null;
    }
}
