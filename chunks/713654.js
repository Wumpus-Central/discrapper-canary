"use strict";
n.d(t, { Bq: () => W, _U: () => $, gU: () => K });
var r = n(138134),
    i = n(622629),
    s = n(922288),
    a = n(669281),
    o = n(778492),
    l = n(278416),
    u = n(935063),
    c = n(425557),
    d = n(948428),
    _ = n(534890),
    f = n(163328),
    p = n(24825),
    h = n(11779),
    E = n(770880),
    m = n(276293),
    g = n(87221),
    A = n(781481),
    I = n(532590),
    T = n(597050),
    S = n(191023),
    y = n(56059),
    N = n(194261),
    v = n(808107),
    C = n(451394),
    O = n(512474),
    R = n(183623),
    b = n(844972),
    D = n(146151),
    L = n(428689),
    w = n(983851),
    M = n(101277),
    P = n(678708),
    x = n(855473),
    k = n(740426),
    U = n(51758),
    G = n(696451),
    F = n(71393),
    V = n(287809),
    B = n(148719),
    H = n(746080),
    j = n(652215),
    Y = n(985018);
function W(e, t, n, r) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return Y.intl.string(Y.t["/7EhaT"]);
    let i = e.isNSFW();
    switch (e.type) {
        case j.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return Y.intl.string(Y.t.Lt3PAK);
            if (r) return Y.intl.string(Y.t.LKpYbi);
            if (i) return Y.intl.string(Y.t.vvASTb);
            if ((0, B.A)(e)) return Y.intl.string(Y.t.jQ1plj);
            return Y.intl.string(Y.t.t1yj0N);
        case j.rbe.GUILD_FORUM:
            let s = e.isMediaChannel();
            if (i) return s ? Y.intl.string(Y.t["pZ/fYa"]) : Y.intl.string(Y.t.ibmpPi);
            if ((0, B.A)(e)) return s ? Y.intl.string(Y.t.gfVCfL) : Y.intl.string(Y.t.UbLM3J);
            return s ? Y.intl.string(Y.t.seKITE) : Y.intl.string(Y.t["0sDXdm"]);
        case j.rbe.GUILD_MEDIA:
            if (i) return Y.intl.string(Y.t["pZ/fYa"]);
            if ((0, B.A)(e)) return Y.intl.string(Y.t.gfVCfL);
            return Y.intl.string(Y.t.seKITE);
        case j.rbe.GUILD_STAGE_VOICE:
            if (n) return Y.intl.string(Y.t.ZjZB3r);
            if ((0, B.A)(e)) return Y.intl.string(Y.t["7pRuCQ"]);
            return Y.intl.string(Y.t.eJFSiN);
        case j.rbe.GUILD_VOICE:
            if (n) return Y.intl.string(Y.t.xY8Wth);
            if ((0, B.A)(e)) return Y.intl.string(Y.t.qaY8Dm);
            return Y.intl.string(Y.t["0kBmow"]);
        case j.rbe.GUILD_ANNOUNCEMENT:
            if (i) return Y.intl.string(Y.t.eRc6o9);
            if ((0, B.A)(e)) return Y.intl.string(Y.t.EHLQwl);
            return Y.intl.string(Y.t.GtDRi2);
        case j.rbe.GUILD_STORE:
            return Y.intl.string(Y.t.Ea4NDL);
        case j.rbe.DM:
            return Y.intl.string(Y.t.jN2DfZ);
        case j.rbe.GROUP_DM:
            return Y.intl.string(Y.t["e5y+gm"]);
        case j.rbe.GUILD_DIRECTORY:
            return Y.intl.string(Y.t.IzZTIe);
        case j.rbe.PUBLIC_THREAD:
            return Y.intl.string(Y.t["7Xm5QI"]);
        case j.rbe.PRIVATE_THREAD:
            return Y.intl.string(Y.t.F1zyvU);
        default:
            return null;
    }
}
function K(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: Y = !1, video: W = !1, stream: K = !1, hasActiveThreads: $ = !1, textFocused: z = !1 } = n;
    if (null == e) return null;
    null == t && (t = F.A.getGuild(e.getGuildId()));
    let q = (0, U.V)(t?.id, [F.A, V.default, G.Ay]);
    if (e.isModeratorReportChannel()) return r.i;
    if (e?.id === t?.rulesChannelId) return i.B;
    let X = e.isNSFW();
    switch (e.type) {
        case j.rbe.GUILD_ANNOUNCEMENT:
            if ($)
                if (X) return s.M;
                else if ((0, B.A)(e)) return a.X;
                else return o.k;
            if (X) return s.M;
            if ((0, B.A)(e)) return a.X;
            return o.k;
        case j.rbe.GUILD_STORE:
            return l.g;
        case j.rbe.DM:
        case j.rbe.GROUP_DM:
            return u.X;
        case j.rbe.PRIVATE_THREAD:
            return c.t;
        case j.rbe.ANNOUNCEMENT_THREAD:
        case j.rbe.PUBLIC_THREAD:
            if (X) return d.m;
            if (e.isForumPost()) return _.o;
            return f.y;
        case j.rbe.GUILD_TEXT:
            if (null != e.linkedLobby) return p.x;
            if (X) return h.r;
            if ((0, B.A)(e)) return E.I;
            return m.N;
        case j.rbe.GUILD_FORUM:
            let Q = e.isMediaChannel();
            if (X) return Q ? g.D : A.f;
            if ((0, B.A)(e)) return Q ? I.c : T.Q;
            return Q ? S.x : y.b;
        case j.rbe.GUILD_MEDIA:
            if (X) return g.D;
            if ((0, B.A)(e)) return I.c;
            return S.x;
        case j.rbe.GUILD_STAGE_VOICE:
            if (q) return (0, B.A)(e) ? N.X : v.D;
            if (Y) return N.X;
            if ((0, B.A)(e)) return v.D;
            else return C.q;
        case j.rbe.GUILD_VOICE:
            if (z) return _.o;
            if (X) return O.O;
            if (K) return R.F;
            if (q)
                if ((0, B.A)(e)) return N.X;
                else return W ? b.k : D.t;
            if (Y) return N.X;
            if ((0, B.A)(e)) return W ? b.k : D.t;
            else return W ? L.n : w.H;
        case j.rbe.GUILD_DIRECTORY:
            return M.P;
        case j.rbe.GUILD_CATEGORY:
            return P.s;
        default:
            if (H.aQ.has(e.id)) {
                if (e.id === H.T4.GUILD_HOME || e.id === H.T4.SERVER_GUIDE) return x.Z;
                else if (e.id === H.T4.CHANNEL_BROWSER || e.id === H.T4.CUSTOMIZE_COMMUNITY) return k.k;
            }
            return null;
    }
}
function $(e) {
    switch (e) {
        case j.rbe.GUILD_ANNOUNCEMENT:
            return o.k;
        case j.rbe.GUILD_STORE:
            return l.g;
        case j.rbe.DM:
        case j.rbe.GROUP_DM:
            return u.X;
        case j.rbe.PRIVATE_THREAD:
            return c.t;
        case j.rbe.ANNOUNCEMENT_THREAD:
        case j.rbe.PUBLIC_THREAD:
            return f.y;
        case j.rbe.GUILD_TEXT:
        case j.rbe.GUILD_FORUM:
        case j.rbe.GUILD_MEDIA:
            return m.N;
        case j.rbe.GUILD_STAGE_VOICE:
            return C.q;
        case j.rbe.GUILD_VOICE:
            return w.H;
        case j.rbe.GUILD_CATEGORY:
            return P.s;
        default:
            return null;
    }
}
