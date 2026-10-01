r.d(t, { Bq: () => el, _U: () => ei, gU: () => en });
var l = r(138134),
    n = r(622629),
    i = r(922288),
    s = r(986226),
    a = r(669281),
    c = r(778492),
    h = r(278416),
    u = r(935063),
    o = r(425557),
    f = r(176781),
    d = r(948428),
    g = r(534890),
    v = r(163328),
    A = r(24825),
    I = r(11779),
    p = r(446057),
    E = r(770880),
    N = r(276293),
    T = r(87221),
    w = r(781481),
    C = r(760911),
    D = r(107086),
    _ = r(532590),
    m = r(597050),
    L = r(191023),
    R = r(434831),
    M = r(56059),
    U = r(194261),
    x = r(808107),
    b = r(451394),
    Z = r(512474),
    G = r(445567),
    V = r(183623),
    O = r(844972),
    j = r(146151),
    y = r(428689),
    H = r(983851),
    S = r(101277),
    F = r(678708),
    P = r(367332),
    B = r(91166),
    k = r(901117),
    J = r(323384),
    Y = r(855473),
    X = r(740426),
    K = r(51758),
    W = r(512287),
    Q = r(696451),
    q = r(71393),
    z = r(287809),
    $ = r(148719),
    ee = r(746080),
    et = r(652215),
    er = r(375708);
function el(e, t, r, l) {
    if (null == e) return null;
    if (e.id === t?.rulesChannelId) return er.intl.string(er.t["/7EhaT"]);
    let n = e.isNSFW();
    switch (e.type) {
        case et.rbe.GUILD_TEXT:
            let i = (0, W.a)(e, "getChannelIconTooltipText");
            if (null != i) return i;
            if (null != e.linkedLobby) return er.intl.string(er.t.Lt3PAK);
            if (l) return er.intl.string(er.t.LKpYbi);
            if (n) return er.intl.string(er.t.vvASTb);
            if (e.isSpoilerChannel()) return er.intl.string(er.t["8QsJXA"]);
            if ((0, $.A)(e)) return er.intl.string(er.t.jQ1plj);
            return er.intl.string(er.t.t1yj0N);
        case et.rbe.GUILD_FORUM:
            let s = e.isMediaChannel(),
                a = e.isGameInvitesChannel();
            if (n) return s ? er.intl.string(er.t["pZ/fYa"]) : er.intl.string(er.t.ibmpPi);
            if (e.isSpoilerChannel()) return er.intl.string(er.t.TDGaxd);
            if ((0, $.A)(e)) {
                if (a) return er.intl.string(er.t.AwjsC9);
                return s ? er.intl.string(er.t.gfVCfL) : er.intl.string(er.t.UbLM3J);
            }
            if (a) return er.intl.string(er.t.BW4VHV);
            return s ? er.intl.string(er.t.seKITE) : er.intl.string(er.t["0sDXdm"]);
        case et.rbe.GUILD_MEDIA:
            if (n) return er.intl.string(er.t["pZ/fYa"]);
            if (e.isSpoilerChannel()) return er.intl.string(er.t.vjYxox);
            if ((0, $.A)(e)) return er.intl.string(er.t.gfVCfL);
            return er.intl.string(er.t.seKITE);
        case et.rbe.GUILD_STAGE_VOICE:
            if (r) return er.intl.string(er.t.ZjZB3r);
            if ((0, $.A)(e)) return er.intl.string(er.t["7pRuCQ"]);
            return er.intl.string(er.t.eJFSiN);
        case et.rbe.GUILD_VOICE:
            if (r) return er.intl.string(er.t.xY8Wth);
            if (n) return er.intl.string(er.t.ajeTKN);
            if (e.isSpoilerChannel()) return er.intl.string(er.t.hGmOlP);
            if ((0, $.A)(e)) return er.intl.string(er.t.qaY8Dm);
            return er.intl.string(er.t["0kBmow"]);
        case et.rbe.GUILD_ANNOUNCEMENT:
            if (n) return er.intl.string(er.t.eRc6o9);
            if (e.isSpoilerChannel()) return er.intl.string(er.t["7F1TCC"]);
            if ((0, $.A)(e)) return er.intl.string(er.t.EHLQwl);
            return er.intl.string(er.t.GtDRi2);
        case et.rbe.GUILD_STORE:
            return er.intl.string(er.t.Ea4NDL);
        case et.rbe.DM:
            return er.intl.string(er.t.jN2DfZ);
        case et.rbe.GROUP_DM:
            return er.intl.string(er.t["e5y+gm"]);
        case et.rbe.GUILD_DIRECTORY:
            return er.intl.string(er.t.IzZTIe);
        case et.rbe.PUBLIC_THREAD:
        case et.rbe.ANNOUNCEMENT_THREAD:
        case et.rbe.MEDIA_THREAD:
            return er.intl.string(er.t["7Xm5QI"]);
        case et.rbe.PRIVATE_THREAD:
            return er.intl.string(er.t.F1zyvU);
        case et.rbe.GUILD_APP:
            if (n) return er.intl.string(er.t.zAEV11);
            if (e.isSpoilerChannel()) return er.intl.string(er.t["HO/lY5"]);
            if ((0, $.A)(e)) return er.intl.string(er.t.MpFE11);
            return er.intl.string(er.t["A+8d6M"]);
        case et.rbe.GUILD_CATEGORY:
        case et.rbe.GUILD_SPACE:
        case et.rbe.UNKNOWN:
        default:
            return null;
    }
}
function en(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: er = !1, video: el = !1, stream: en = !1, hasActiveThreads: ei = !1, textFocused: es = !1 } = r;
    if (null == e) return null;
    null == t && (t = q.A.getGuild(e.getGuildId()));
    let ea = (0, K.V)(t?.id, [q.A, z.default, Q.Ay]);
    if (e.isModeratorReportChannel()) return l.FlagIcon;
    if (e?.id === t?.rulesChannelId) return n.B;
    let ec = e.isNSFW();
    switch (e.type) {
        case et.rbe.GUILD_ANNOUNCEMENT:
            if (ei)
                if (ec) return i.M;
                else if (e.isSpoilerChannel()) return s.u;
                else if ((0, $.A)(e)) return a.X;
                else return c.k;
            if (ec) return i.M;
            if (e.isSpoilerChannel()) return s.u;
            if ((0, $.A)(e)) return a.X;
            return c.k;
        case et.rbe.GUILD_STORE:
            return h.TagIcon;
        case et.rbe.DM:
        case et.rbe.GROUP_DM:
            return u.X;
        case et.rbe.PRIVATE_THREAD:
            return o.t;
        case et.rbe.MEDIA_THREAD:
            return f.x;
        case et.rbe.ANNOUNCEMENT_THREAD:
        case et.rbe.PUBLIC_THREAD:
            if (ec) return d.m;
            if (e.isForumPost()) return g.ChatIcon;
            return v.y;
        case et.rbe.GUILD_TEXT:
            let eh = (0, W.A)(e, "getChannelIconComponent");
            if (null != eh) return eh;
            if (null != e.linkedLobby) return A.x;
            if (ec) return I.r;
            if (e.isSpoilerChannel()) return p.n;
            if ((0, $.A)(e)) return E.I;
            return N.N;
        case et.rbe.GUILD_FORUM:
            let eu = e.isMediaChannel(),
                eo = e.isGameInvitesChannel();
            if (ec) return eu ? T.D : w.f;
            if (e.isSpoilerChannel()) return C.H;
            if ((0, $.A)(e)) {
                if (eo) return D.s;
                return eu ? _.c : m.Q;
            } else if (eu) return L.ImageIcon;
            else if (eo) return R.t;
            else return M.b;
        case et.rbe.GUILD_MEDIA:
            if (ec) return T.D;
            if (e.isSpoilerChannel()) return C.H;
            if ((0, $.A)(e)) return _.c;
            else return L.ImageIcon;
        case et.rbe.GUILD_STAGE_VOICE:
            if (ea) return (0, $.A)(e) ? U.LockIcon : x.D;
            if (er) return U.LockIcon;
            if ((0, $.A)(e)) return x.D;
            else return b.q;
        case et.rbe.GUILD_VOICE:
            if (es) return g.ChatIcon;
            if (ec) return Z.O;
            if (e.isSpoilerChannel()) return G.P;
            if (en) return V.F;
            if (ea)
                if ((0, $.A)(e)) return U.LockIcon;
                else return el ? O.k : j.t;
            if (er) return U.LockIcon;
            if ((0, $.A)(e)) return el ? O.k : j.t;
            else return el ? y.VideoIcon : H.H;
        case et.rbe.GUILD_DIRECTORY:
            return S.P;
        case et.rbe.GUILD_CATEGORY:
            return F.FolderIcon;
        case et.rbe.GUILD_APP:
            if (ec) return P.c;
            if (e.isSpoilerChannel()) return B.W;
            if ((0, $.A)(e)) return k.Z;
            else return J.k;
        case et.rbe.UNKNOWN:
            if (ee.aQ.has(e.id)) {
                if (e.id === ee.T4.GUILD_HOME || e.id === ee.T4.SERVER_GUIDE) return Y.Z;
                else if (e.id === ee.T4.CHANNEL_BROWSER || e.id === ee.T4.CUSTOMIZE_COMMUNITY) return X.k;
            }
            return null;
        case et.rbe.GUILD_SPACE:
        default:
            return null;
    }
}
function ei(e) {
    switch (e) {
        case et.rbe.GUILD_ANNOUNCEMENT:
            return c.k;
        case et.rbe.GUILD_STORE:
            return h.TagIcon;
        case et.rbe.DM:
        case et.rbe.GROUP_DM:
            return u.X;
        case et.rbe.PRIVATE_THREAD:
            return o.t;
        case et.rbe.ANNOUNCEMENT_THREAD:
        case et.rbe.PUBLIC_THREAD:
        case et.rbe.MEDIA_THREAD:
            return v.y;
        case et.rbe.GUILD_TEXT:
            return N.N;
        case et.rbe.GUILD_FORUM:
            return M.b;
        case et.rbe.GUILD_MEDIA:
            return L.ImageIcon;
        case et.rbe.GUILD_STAGE_VOICE:
            return b.q;
        case et.rbe.GUILD_VOICE:
            return H.H;
        case et.rbe.GUILD_CATEGORY:
            return F.FolderIcon;
        case et.rbe.GUILD_DIRECTORY:
            return S.P;
        case et.rbe.GUILD_APP:
            return J.k;
        case et.rbe.LOBBY:
        case et.rbe.DM_SDK:
        case et.rbe.GUILD_SPACE:
        case et.rbe.UNKNOWN:
        default:
            return null;
    }
}
