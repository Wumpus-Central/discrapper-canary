"use strict";
n.d(t, { Bq: () => q, _U: () => X, gU: () => Z });
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
    f = n(534890),
    h = n(163328),
    p = n(24825),
    E = n(11779),
    m = n(446057),
    g = n(770880),
    A = n(276293),
    I = n(87221),
    T = n(781481),
    S = n(760911),
    N = n(532590),
    y = n(597050),
    C = n(191023),
    v = n(56059),
    O = n(194261),
    R = n(808107),
    b = n(451394),
    D = n(512474),
    L = n(445567),
    w = n(183623),
    M = n(844972),
    P = n(146151),
    x = n(428689),
    U = n(983851),
    k = n(101277),
    G = n(678708),
    F = n(855473),
    V = n(740426),
    B = n(51758),
    H = n(696451),
    j = n(71393),
    Y = n(287809),
    W = n(148719),
    K = n(746080),
    z = n(652215),
    $ = n(375708);
function q(e, t, n, i) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return $.intl.string($.t["/7EhaT"]);
    let r = e.isNSFW();
    switch (e.type) {
        case z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return $.intl.string($.t.Lt3PAK);
            if (i) return $.intl.string($.t.LKpYbi);
            if (r) return $.intl.string($.t.vvASTb);
            if (e.isSpoilerChannel()) return $.intl.string($.t["8QsJXA"]);
            if ((0, W.A)(e)) return $.intl.string($.t.jQ1plj);
            return $.intl.string($.t.t1yj0N);
        case z.rbe.GUILD_FORUM:
            let s = e.isMediaChannel();
            if (r) return s ? $.intl.string($.t["pZ/fYa"]) : $.intl.string($.t.ibmpPi);
            if (e.isSpoilerChannel()) return $.intl.string($.t.TDGaxd);
            if ((0, W.A)(e)) return s ? $.intl.string($.t.gfVCfL) : $.intl.string($.t.UbLM3J);
            return s ? $.intl.string($.t.seKITE) : $.intl.string($.t["0sDXdm"]);
        case z.rbe.GUILD_MEDIA:
            if (r) return $.intl.string($.t["pZ/fYa"]);
            if ((0, W.A)(e)) return $.intl.string($.t.gfVCfL);
            return $.intl.string($.t.seKITE);
        case z.rbe.GUILD_STAGE_VOICE:
            if (n) return $.intl.string($.t.ZjZB3r);
            if ((0, W.A)(e)) return $.intl.string($.t["7pRuCQ"]);
            return $.intl.string($.t.eJFSiN);
        case z.rbe.GUILD_VOICE:
            if (n) return $.intl.string($.t.xY8Wth);
            if (r) return $.intl.string($.t.ajeTKN);
            if (e.isSpoilerChannel()) return $.intl.string($.t.hGmOlP);
            if ((0, W.A)(e)) return $.intl.string($.t.qaY8Dm);
            return $.intl.string($.t["0kBmow"]);
        case z.rbe.GUILD_ANNOUNCEMENT:
            if (r) return $.intl.string($.t.eRc6o9);
            if (e.isSpoilerChannel()) return $.intl.string($.t["7F1TCC"]);
            if ((0, W.A)(e)) return $.intl.string($.t.EHLQwl);
            return $.intl.string($.t.GtDRi2);
        case z.rbe.GUILD_STORE:
            return $.intl.string($.t.Ea4NDL);
        case z.rbe.DM:
            return $.intl.string($.t.jN2DfZ);
        case z.rbe.GROUP_DM:
            return $.intl.string($.t["e5y+gm"]);
        case z.rbe.GUILD_DIRECTORY:
            return $.intl.string($.t.IzZTIe);
        case z.rbe.PUBLIC_THREAD:
            return $.intl.string($.t["7Xm5QI"]);
        case z.rbe.PRIVATE_THREAD:
            return $.intl.string($.t.F1zyvU);
        default:
            return null;
    }
}
function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: $ = !1, video: q = !1, stream: Z = !1, hasActiveThreads: X = !1, textFocused: Q = !1 } = n;
    if (null == e) return null;
    null == t && (t = j.A.getGuild(e.getGuildId()));
    let J = (0, B.V)(t?.id, [j.A, Y.default, H.Ay]);
    if (e.isModeratorReportChannel()) return i.i;
    if (e?.id === t?.rulesChannelId) return r.B;
    let ee = e.isNSFW();
    switch (e.type) {
        case z.rbe.GUILD_ANNOUNCEMENT:
            if (X)
                if (ee) return s.M;
                else if (e.isSpoilerChannel()) return a.u;
                else if ((0, W.A)(e)) return o.X;
                else return l.k;
            if (ee) return s.M;
            if (e.isSpoilerChannel()) return a.u;
            if ((0, W.A)(e)) return o.X;
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
            if (ee) return _.m;
            if (e.isForumPost()) return f.o;
            return h.y;
        case z.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return p.x;
            if (ee) return E.r;
            if (e.isSpoilerChannel()) return m.n;
            if ((0, W.A)(e)) return g.I;
            return A.N;
        case z.rbe.GUILD_FORUM:
            let et = e.isMediaChannel();
            if (ee) return et ? I.D : T.f;
            if (e.isSpoilerChannel()) return S.H;
            if ((0, W.A)(e)) return et ? N.c : y.Q;
            else if (et) return C.x;
            else if (e.isGameInvitesChannel()) return p.x;
            else return v.b;
        case z.rbe.GUILD_MEDIA:
            if (ee) return I.D;
            if ((0, W.A)(e)) return N.c;
            return C.x;
        case z.rbe.GUILD_STAGE_VOICE:
            if (J) return (0, W.A)(e) ? O.X : R.D;
            if ($) return O.X;
            if ((0, W.A)(e)) return R.D;
            else return b.q;
        case z.rbe.GUILD_VOICE:
            if (Q) return f.o;
            if (ee) return D.O;
            if (e.isSpoilerChannel()) return L.P;
            if (Z) return w.F;
            if (J)
                if ((0, W.A)(e)) return O.X;
                else return q ? M.k : P.t;
            if ($) return O.X;
            if ((0, W.A)(e)) return q ? M.k : P.t;
            else return q ? x.n : U.H;
        case z.rbe.GUILD_DIRECTORY:
            return k.P;
        case z.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            if (K.aQ.has(e.id)) {
                if (e.id === K.T4.GUILD_HOME || e.id === K.T4.SERVER_GUIDE) return F.Z;
                else if (e.id === K.T4.CHANNEL_BROWSER || e.id === K.T4.CUSTOMIZE_COMMUNITY) return V.k;
            }
            return null;
    }
}
function X(e) {
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
            return h.y;
        case z.rbe.GUILD_TEXT:
        case z.rbe.GUILD_FORUM:
        case z.rbe.GUILD_MEDIA:
            return A.N;
        case z.rbe.GUILD_STAGE_VOICE:
            return b.q;
        case z.rbe.GUILD_VOICE:
            return U.H;
        case z.rbe.GUILD_CATEGORY:
            return G.s;
        default:
            return null;
    }
}
