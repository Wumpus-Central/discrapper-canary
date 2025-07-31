n.d(t, {
    KS: () => p,
    Th: () => h,
    bT: () => f
});
var r = n(481060),
    i = n(622822),
    a = n(281956),
    o = n(271383),
    s = n(430824),
    l = n(594174),
    c = n(447003),
    u = n(176505),
    d = n(981631),
    _ = n(388032);
function f(e, t, n, r) {
    if (null == e) return null;
    if (e.id === (null == t ? void 0 : t.rulesChannelId)) return _.intl.string(_.t['/7EhaW']);
    let a = (0, i.aC)(e);
    switch (e.type) {
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return _.intl.string(_.t.Lt3PAA);
            if (r) return _.intl.string(_.t.LKpYbm);
            if (a) return _.intl.string(_.t.vvASTU);
            if ((0, c.Z)(e)) return _.intl.string(_.t.jQ1plp);
            return _.intl.string(_.t.t1yj0N);
        case d.d4z.GUILD_FORUM:
            let o = e.isMediaChannel();
            if (a) return o ? _.intl.string(_.t['pZ/fYW']) : _.intl.string(_.t.ibmpPj);
            if ((0, c.Z)(e)) return o ? _.intl.string(_.t.gfVCfH) : _.intl.string(_.t.UbLM3N);
            return o ? _.intl.string(_.t.seKITE) : _.intl.string(_.t['0sDXdn']);
        case d.d4z.GUILD_MEDIA:
            if (a) return _.intl.string(_.t['pZ/fYW']);
            if ((0, c.Z)(e)) return _.intl.string(_.t.gfVCfH);
            return _.intl.string(_.t.seKITE);
        case d.d4z.GUILD_STAGE_VOICE:
            if (n) return _.intl.string(_.t.ZjZB3t);
            if ((0, c.Z)(e)) return _.intl.string(_.t['7pRuCQ']);
            return _.intl.string(_.t.eJFSiI);
        case d.d4z.GUILD_VOICE:
            if (n) return _.intl.string(_.t.xY8Wtr);
            if ((0, c.Z)(e)) return _.intl.string(_.t.qaY8Dg);
            return _.intl.string(_.t['0kBmo6']);
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (a) return _.intl.string(_.t.eRc6o6);
            if ((0, c.Z)(e)) return _.intl.string(_.t.EHLQws);
            return _.intl.string(_.t.GtDRi4);
        case d.d4z.GUILD_STORE:
            return _.intl.string(_.t.Ea4NDA);
        case d.d4z.DM:
            return _.intl.string(_.t.jN2DfX);
        case d.d4z.GROUP_DM:
            return _.intl.string(_.t['e5y+go']);
        case d.d4z.GUILD_DIRECTORY:
            return _.intl.string(_.t.IzZTIS);
        case d.d4z.PUBLIC_THREAD:
            return _.intl.string(_.t['7Xm5QE']);
        case d.d4z.PRIVATE_THREAD:
            return _.intl.string(_.t.F1zyvb);
        default:
            return null;
    }
}
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { locked: _ = !1, video: f = !1, stream: p = !1, hasActiveThreads: h = !1, textFocused: m = !1 } = n;
    if (null == e) return null;
    null == t && (t = s.Z.getGuild(e.getGuildId()));
    let g = (0, a.n)(null == t ? void 0 : t.id, [s.Z, l.default, o.ZP]);
    if (e.isModeratorReportChannel()) return r.U65;
    if ((null == e ? void 0 : e.id) === (null == t ? void 0 : t.rulesChannelId)) return r.snC;
    let E = (0, i.aC)(e);
    switch (e.type) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            if (h)
                if (E) return r.ToS;
                else if ((0, c.Z)(e)) return r.Fv2;
                else return r.MqZ;
            if (E) return r.ToS;
            if ((0, c.Z)(e)) return r.Fv2;
            return r.MqZ;
        case d.d4z.GUILD_STORE:
            return r.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.lOy;
        case d.d4z.PRIVATE_THREAD:
            return r.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            if (E) return r.Xn;
            if (e.isForumPost()) return r.kBi;
            return r.or_;
        case d.d4z.GUILD_TEXT:
            if (null != e.linkedLobby) return r.rbH;
            if (E) return r.z0B;
            if ((0, c.Z)(e)) return r.W4G;
            return r.VL1;
        case d.d4z.GUILD_FORUM:
            let b = e.isMediaChannel();
            if (E) return b ? r.fFY : r.Mec;
            if ((0, c.Z)(e)) return b ? r.D7T : r.BUe;
            return b ? r.XBm : r.Mmi;
        case d.d4z.GUILD_MEDIA:
            if (E) return r.fFY;
            if ((0, c.Z)(e)) return r.D7T;
            return r.XBm;
        case d.d4z.GUILD_STAGE_VOICE:
            if (g) return (0, c.Z)(e) ? r.mBM : r.pki;
            if (_) return r.mBM;
            if ((0, c.Z)(e)) return r.pki;
            else return r.ewx;
        case d.d4z.GUILD_VOICE:
            if (m) return r.kBi;
            if (E) return r.BVY;
            if (p) return r.hGI;
            if (g)
                if ((0, c.Z)(e)) return r.mBM;
                else return f ? r.TLW : r.gjC;
            if (_) return r.mBM;
            if ((0, c.Z)(e)) return f ? r.TLW : r.gjC;
            else return f ? r.Odl : r.gj8;
        case d.d4z.GUILD_DIRECTORY:
            return r.aVH;
        case d.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            if (u.EC.has(e.id)) {
                if (e.id === u.HY.GUILD_HOME || e.id === u.HY.SERVER_GUIDE) return r.Vy8;
                else if (e.id === u.HY.CHANNEL_BROWSER || e.id === u.HY.CUSTOMIZE_COMMUNITY) return r.H$4;
            }
            return null;
    }
}
function h(e) {
    switch (e) {
        case d.d4z.GUILD_ANNOUNCEMENT:
            return r.MqZ;
        case d.d4z.GUILD_STORE:
            return r.lO_;
        case d.d4z.DM:
        case d.d4z.GROUP_DM:
            return r.lOy;
        case d.d4z.PRIVATE_THREAD:
            return r.qtY;
        case d.d4z.ANNOUNCEMENT_THREAD:
        case d.d4z.PUBLIC_THREAD:
            return r.or_;
        case d.d4z.GUILD_TEXT:
        case d.d4z.GUILD_FORUM:
        case d.d4z.GUILD_MEDIA:
            return r.VL1;
        case d.d4z.GUILD_STAGE_VOICE:
            return r.ewx;
        case d.d4z.GUILD_VOICE:
            return r.gj8;
        case d.d4z.GUILD_CATEGORY:
            return r.ROc;
        default:
            return null;
    }
}
